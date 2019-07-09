!function() {
    var duration = 50;
    function writeCode(prefix, code, fn) {
        let n = 0;
        let container = document.querySelector("#code");
        let styleTag = document.querySelector("#styleTag");
        let id;
        id = setTimeout(function run() {
            n += 1;
            container.innerHTML = code.substring(0, n);
            styleTag.innerHTML = code.substring(0, n);
            container.scrollTop = container.scrollHeight;
            if (n < code.length) {
                id = setTimeout(run, duration);
            } else {
                clearTimeout(id);
                fn && fn.call();
            }
        }, duration);
    }
    let code = `
    .preview {
        background: #ffe600;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .wrapper {
        height: 237px;
        width: 100%;
        position: relative;
    }
    .nose {
        width: 0px;
        height: 0px;
        border-style: solid;
        border-color: black transparent transparent;
        border-width: 15px 16px;
        border-radius: 50%;
        position: absolute;
        top: 33px;
        left: 50%;
        margin-left: -16px;
    }
    .eye {
        width: 63px;
        height: 63px;
        border: 3px solid black;
        border-radius: 50%;
        background: #2e2e2e;
        position: absolute;
    }
    .eye::after {
        content: "";
        width: 31px;
        height: 31px;
        border: 3px solid black;
        border-radius: 50%;
        background: #fff;
        position: absolute;
        left: 7px;
        top: -2px;
    }
    .eye.left {
        right: 50%;
        margin-right: 88px;
    }
    .eye.right {
        left: 50%;
        margin-left: 88px;
    }
    
    .face {
        width: 88px;
        height: 88px;
        border: 3px solid black;
        border-radius: 50%;
        background: #f00;
        position: absolute;
        top: 109px;
    }
    .face.left {
        right: 50%;
        margin-right: 123px;
    }
    .face.right {
        left: 50%;
        margin-left: 123px;
    }
    
    .upperLip {
        width: 80px;
        height: 25px;
        border: 3px solid;
        position: absolute;
        top: 67px;
        z-index: 1;
        background: #ffe600;
    }
    .upperLip.left {
        right: 50%;
        border-bottom-left-radius: 60px 30px;
        border-right: none;
        border-top: none;
        transform: rotate(-16deg);
    }
    .upperLip.right {
        left: 50%;
        border-bottom-right-radius: 60px 30px;
        border-left: none;
        border-top: none;
        transform: rotate(16deg);
    }
    .lowerLip-wrapper {
        width: 228px;
        height: 162px;
        position: absolute;
        bottom: 0;
        left: 50%;
        margin-left: -114px;
        overflow: hidden;
    }
    .lowerLip {
        width: 228px;
        height: 800px;
        position: absolute;
        border: 4px solid black;
        bottom: 0;
        background: #9b000a;
        border-bottom-left-radius: 118px 800px;
        border-bottom-right-radius: 118px 800px;
        overflow: hidden;
    }
    .lowerLip::after {
        content: "";
        width: 130px;
        height: 100px;
        border-top-left-radius: 100%;
        border-top-right-radius: 100%;
        position: absolute;
        background: #ff485f;
        bottom: 0;
        left: 50%;
        margin-left: -65px;
    }`;
    writeCode("", code);
}.call();
