import express, { NextFunction } from 'express';
import { Router, Request, Response } from 'express';

import bodyParser from 'body-parser';
import { filterImageFromURL, deleteLocalFiles, validateURL } from './util/util';

(async () => {

  // Init the Express application
  const app = express();

  // Set the network port
  const port = process.env.PORT || 8082;

  // Use the body parser middleware for post requests
  app.use(bodyParser.json());

  // Root Endpoint
  // Displays a simple message to the user
  app.get("/", async (req, res) => {
    res.send("try GET /filteredimage?image_url={{}}")
  });

  // GET /filteredimage?image_url={{URL}}
  // Endpoint to filter an image from a public url.  
  // QUERY PARAMATERS
  //    image_url: URL of a publicly accessible image
  // RETURNS
  //   the filtered image file
  app.get("/filteredimage", async (req: Request, res: Response) => {

    //1. validate the image_url query
    const image_url: string = req.query.image_url;
    if (typeof image_url == 'undefined' || !validateURL(image_url)) {
      return res.status(422).send({ message: 'Unable to process the requested image url.' });
    }
    let filteredpath: string;
    //2. call filterImageFromURL(image_url) to filter the image
    filteredpath = await filterImageFromURL(image_url);
    //3. send the resulting file in the response
    return res.status(200).sendFile(filteredpath, async () => {
      //4. deletes any files on the server on finish of the response
      await deleteLocalFiles([filteredpath]);
    });

  });

  // Start the Server
  app.listen(port, () => {
    console.log(`server running http://localhost:${port}`);
    console.log(`press CTRL+C to stop server`);
  });
})();