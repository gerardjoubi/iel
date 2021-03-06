import React from "react";
import { convertFromRaw, EditorState } from "draft-js";
import { stateToHTML } from "draft-js-export-html";

const Lesson = ({ lesson }) => {
  if (typeof lesson === "undefined") return null;

  //THIS IS HOW TO FORMAT THAT INLINE STYLES
  const options = {
    // inlineStyles: {
    //     // Override default element (`strong`).
    //     BOLD: { element: "b" },
    //     ITALIC: {
    //       // Add custom attributes. You can also use React-style `className`.
    //       // attributes: { className: "foo" },
    //       // Use camel-case. Units (`px`) will be added where necessary.
    //       style: { fontSize: 40 }
    //     },
    //   }
    // Use a custom inline style. Default element is `span`.
    // inlineStyleFn: styles => {
    // //   let key = "color-";
    // //   let color = styles.filter(value => value.startsWith(key)).first();
    // //   if (color) {
    // //     return {
    // //       element: "span",
    // //       style: {
    // //         color: color.replace(key, "")
    // //       }
    // //     };
    // //   }
    // //   let fontKey = "fontsize-";
    // //   let fontSize = styles.filter(value => value.startsWith(fontKey)).first();
    // //   if (fontSize) {
    // //     return {
    // //       style: {
    // //         fontSize: fontSize.replace(fontKey, "")
    // //       }
    // //     };
    // //   }
    // // }
    inlineStyleFn: styles => {
      let colorKey = "color-";
      let fontKey = "fontsize-";
      let fontSize = styles.filter(value => value.startsWith(fontKey)).first();
      let color = styles.filter(value => value.startsWith(colorKey)).first();
      let allStyles = { style: {} };
      if (color) {
        allStyles.style = {
          ...allStyles.style,
          color: color.replace(colorKey, "")
        };
      }
      if (fontSize) {
        allStyles.style = {
          ...allStyles.style,
          fontSize: fontSize.replace(fontKey, "")
        };
      }
      return allStyles;
    }
  };

  const convertToHtml = lesson => {
    const raw = JSON.parse(lesson.content);
    const contentState = convertFromRaw(raw);
    const editorState = EditorState.createWithContent(contentState);
    console.log(editorState.getCurrentContent());
    const html = stateToHTML(editorState.getCurrentContent(), options);
    return html;
  };

  return (
    <React.Fragment>
      <div dangerouslySetInnerHTML={{ __html: convertToHtml(lesson) }} />
    </React.Fragment>
  );
};

export default Lesson;
