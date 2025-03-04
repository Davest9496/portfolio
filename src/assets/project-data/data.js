import fyyur from "../project-image/fyyur.png";
import storefront from "../project-image/storefront.png";
import image_resizer from "../project-image/image_resizer.png"

const DATA = [
  {
    id: 1,
    title: "storefront",
    image: storefront.src,
    details: [
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam" +
        " quod aliquam, accusamus vero perspiciatis optio fugiat" +
        " perferendis dolorum alias, impedit, quos obcaecati? Dignissimos" +
        " alias nisi voluptatum sapiente neque laborum odit.",
      "Detail 2",
      "Detail 3",
    ],
    tools: ["Tool 1", "Tool 2", "Tool 3"],
  },
  {
    id: 2,
    title: "fyyur",
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
    title: "image resizer",
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