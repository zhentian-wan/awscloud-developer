import express, { NextFunction, Request, Response } from 'express';
import bodyParser from 'body-parser';
import {filterImageFromURL, deleteLocalFiles} from './util/util';

(async () => {

  // Init the Express application
  const app = express();

  // Set the network port
  const port = process.env.PORT || 8082;
  
  // Use the body parser middleware for post requests
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))

  let allFiles: string[] = [];
  const cleanUp = (req: Request, res: Response, next: NextFunction) => {
    const sendFile = res.sendFile.bind(res);
    res.sendFile = (body: any) => {
      sendFile(body);
      deleteLocalFiles(allFiles)
      allFiles = [];
    }
    next();
  }

  app.use('/', cleanUp)

  // @TODO1 IMPLEMENT A RESTFUL ENDPOINT
  // GET /filteredimage?image_url={{URL}}
  // endpoint to filter an image from a public url.
  // IT SHOULD
  //    1
  //    1. validate the image_url query
  //    2. call filterImageFromURL(image_url) to filter the image
  //    3. send the resulting file in the response
  //    4. deletes any files on the server on finish of the response
  // QUERY PARAMATERS
  //    image_url: URL of a publicly accessible image
  // RETURNS
  //   the filtered image file [!!TIP res.sendFile(filteredpath); might be useful]
  app.get('/filteredimage', async (req: Request, res: Response) => {
    const {image_url} = req.query;
    const filtered_img_path = await filterImageFromURL(image_url.toString())
    res.sendFile(filtered_img_path);
    allFiles.push(filtered_img_path);
  })



  /**************************************************************************** */

  //! END @TODO1
  
  // Root Endpoint
  // Displays a simple message to the user
  app.get( "/", async ( req, res ) => {
    res.send("try GET /filteredimage?image_url={{}}")
  } );
  

  // Start the Server
  app.listen( port, () => {
      console.log( `server running http://localhost:${ port }` );
      console.log( `press CTRL+C to stop server` );
  } );
})();