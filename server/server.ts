import { Hono } from "hono";
import { serve } from "@hono/node-server";
const app = new Hono();
app.get("/", async (c) => {
  return c.text("Hello Somebody!");
});

app.get("/kws2100-lecture-05/api/skoler", async (c) => {
  return c.json({
    type: "FeautureCollection",
    crs: {
      type: "name",
      properties: {
        name: "urn:ogc:def:crs:OGC:1.3:CRS84",
      },
    },
    features: [],
  });
});

serve(app);
