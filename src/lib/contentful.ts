import { createClient } from "contentful";

import { Entry } from "contentful";
import { Document } from "@contentful/rich-text-types";

export interface IPostFields {
  title: string;
  slug: string;
  content: Document;
}

export interface IPost extends Entry<IPostFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "blog";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export const buildClient = () => {
  const client = createClient({
    space: 'sfc9jzc5jdb3',
    accessToken: 'fJqgmVTr9cG8Wmf0HWAqjcCNOq8ifUTLV-4ZBky2fwc',
  });
  return client;
};