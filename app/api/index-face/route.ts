import uuid from '@/app/utils/uuid';
import { RekognitionClient, IndexFacesCommand } from "@aws-sdk/client-rekognition";

// Credenciales globales para la configuracion de AWS
const client = new RekognitionClient({
  credentials: {
    accessKeyId: `${process.env.ACCESS_KEY_ID}`,
    secretAccessKey: `${process.env.SECRET_ACCESS_KEY}`
  },
  region: `${process.env.REGION}`
});

// Nombre de la coleccion
const collection = `${process.env.COLLECTION_NAME}`

/* Funcion para la busqueda de un rostro ya registrado
en la DB de Azure rekognition */
export async function POST(request: Request) {
  const { docket, imageSrc }: any | null | string = await request.json();
  if (imageSrc && docket) {
  // Se elimina la primera parte del string en base64 
  const base64Img = imageSrc.replace('data:image/jpeg;base64,', '');
  // Se transforma a binario para enviarlo como parametro a la api
  const imgBuffer = Buffer.from(base64Img, 'base64');
  // Crea un id unico para cada imagen
  const imageId = uuid();
  // Se registra un rostro
  const params = {
    CollectionId: collection,
    ExternalImageId: docket,
    Image: {
      Bytes: imgBuffer,
    },
  }
  const command = new IndexFacesCommand(params);
  const resp = await client.send(command)
    .then(data => data)
    .catch(error => error)
  console.log("respApiIndex>>>",resp.FaceRecords)
  if (resp.FaceRecords) {
    return new Response(JSON.stringify({
        id: `${resp.FaceRecords[0].Face.ExternalImageId}`
    }),
    {
      status: 200,
      headers: {
        'content-type': 'application/json',
      },
    })
  } else {
    return new Response(JSON.stringify({
        message: "Query failed"
    }),
    {
      status: 400,
      headers: {
        'content-type': 'application/json',
      },
    })
  }
  } else {
    return new Response(JSON.stringify({
      message: 'Body parameter error',
    }),
    {
      status: 400,
      headers: {
        'content-type': 'application/json',
      },
    })
  }
}