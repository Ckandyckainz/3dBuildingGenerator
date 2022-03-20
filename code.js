let mcan = document.getElementById("maincanvas");
mcan.width = window.innerWidth;
mcan.height = window.innerHeight;
let mcw = mcan.width;
let mch = mcan.height;
let mgl = mcan.getContext("webgl2");
mgl.viewport(0, 0, mcw, mch);

let vertexShader =
    `#version 300 es
    precision highp float;
    in vec3 inPos;
    out vec3 outPos;
    void main(){
        outPos = inPos;
        gl_Position = vec4(inPos, 1.0);
    }
`;

let fragmentShader =
    `#version 300 es
    precision highp float;
    in vec3 outPos;
    out vec4 color;
    void main(){
        color = vec4(0.0, 0.0, 0.0, 1.0);
    }
`;
let compiledVertexShader = mgl.createShader(mgl.VERTEX_SHADER);
mgl.shaderSource(compiledVertexShader, vertexShader);
mgl.compileShader(compiledVertexShader);
console.log(mgl.getShaderInfoLog(compiledVertexShader));

let compiledFragmentShader = mgl.createShader(mgl.FRAGMENT_SHADER);
mgl.shaderSource(compiledFragmentShader, fragmentShader);
mgl.compileShader(compiledFragmentShader);
console.log(mgl.getShaderInfoLog(compiledFragmentShader));

let shaderProgram = mgl.createProgram();
mgl.attachShader(shaderProgram, compiledVertexShader);
mgl.attachShader(shaderProgram, compiledFragmentShader);
mgl.linkProgram(shaderProgram);
console.log(mgl.getProgramInfoLog(shaderProgram));

let vertexBuffer = mgl.createBuffer();
let vertexBufferData = new Float32Array([Math.random()*2-1, Math.random()*2-1, Math.random(), Math.random()*2-1, Math.random()*2-1, Math.random(), Math.random()*2-1, Math.random()*2-1, Math.random()]);
mgl.bindBuffer(mgl.ARRAY_BUFFER, vertexBuffer);
mgl.bufferData(mgl.ARRAY_BUFFER, vertexBufferData, mgl.STATIC_DRAW);
mgl.useProgram(shaderProgram);
mgl.enableVertexAttribArray(0);
mgl.vertexAttribPointer(0, 3, mgl.FLOAT, false, 0, 0);
mgl.drawArrays(mgl.TRIANGLES, 0, 3);

class Pyr{
    constructor(){

    }
}

function drawPyramid(mgl, pyr){

}