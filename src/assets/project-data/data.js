import fyyur from "../project-image/fyyur.png";
import storefront from "../project-image/storefront.png";
import image_resizer from "../project-image/image_resizer.png"

const DATA = [
  {
    id: 1,
    title: "storefront - an e-commerce website",
    image: storefront.src,
    details: [
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam" +
        " quod aliquam, accusamus vero perspiciatis optio fugiat" +
        " perferendis dolorum alias, impedit, quos obcaecati? Dignissimos" +
        " alias nisi voluptatum sapiente neque laborum odit.",
      "Detail 2",
      "Detail 3",
    ],
    tools: ["SaSS", "Angular", "TypeScript", "NodeJs", "Postgres", "API"],
  },
  {
    id: 2,
    title: "fyyur - a music & venue booking site",
    image: fyyur.src,
    details: [
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam" +
        " quod aliquam, accusamus vero perspiciatis optio fugiat" +
        " perferendis dolorum alias, impedit, quos obcaecati? Dignissimos" +
        " alias nisi voluptatum sapiente neque laborum odit.",
      "Detail C",
    ],
    tools: ["Tool A", "Tool B", "Tool C"],
  },
  {
    id: 3,
    title: "image resizer - an image resizing web application",
    image: image_resizer.src,
    details: [
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam" +
        " quod aliquam, accusamus vero perspiciatis optio fugiat" +
        " perferendis dolorum alias, impedit, quos obcaecati? Dignissimos" +
        " alias nisi voluptatum sapiente neque laborum odit.",
    ],
    tools: ["Detail A", "Detail B", "Detail C"],
  },
];

export default DATA