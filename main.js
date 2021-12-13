
import * as monaco from "monaco-editor";
import HtmlWorker from "monaco-editor/esm/vs/language/html/html.worker?worker"
import CssWorker from "monaco-editor/esm/vs/language/css/css.worker?worker"
import JsWorker from "monaco-editor/esm/vs/language/typescript/ts.worker?worker"
const $ = selector =>  document.querySelector(selector);
import "./style.css"

window.MonacoEnvironment = {
getWorker (_,label) {
if(label === "html"){

  return HtmlWorker()
}else if(label === "css"){

return CssWorker()

}
else if(label === "javascript"){

return JsWorker()

}
}
}







const htmlEditor = monaco.editor.create($("#html"),{
value: "",
language:"html",
theme:"vs-dark",

})


const csslEditor = monaco.editor.create($("#css"),{
  value: "",
  language:"css"  
  
  
  })



const jslEditor = monaco.editor.create($("#js"),{
  value: "",
  language:"javascript"
  
  
  })
  
  

document.addEventListener('DOMContentLoaded',()=>{
htmlEditor.onDidChangeModelContent(()=>{



update();

})

csslEditor.onDidChangeModelContent(()=>{



  update();
  
  })
  

  jslEditor.onDidChangeModelContent(()=>{



    update();
    
    })
  



  let ElemFrame = $("#frame");
  
  
  
  
  
  function update(){
    let html =  htmlEditor.getValue();
   let css = csslEditor.getValue()
   let js = jslEditor.getValue();
 let Dom = `<html>
 <head>
 <style>${css}</style>
 </head>



<body>${html}</body>
 



<script type="text/javascript">${js}</script> 
 
 </html>`




    ElemFrame.setAttribute("srcdoc",Dom);
    
    }
    


})








