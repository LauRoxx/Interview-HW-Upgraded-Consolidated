import React,{useEffect, useState} from "react";

const LISPchecker = () => {
  const [codeSnippet, setCodeSnippet] = useState("");
  const [result, setResult] = useState("No code submitted");
  const [testedCode, setTestedCode] = useState("");
  
  const updateCodeSnippet = e => {
    setCodeSnippet(e.target.value);
  }

  const submitCode = e => {
    e.preventDefault();
    setTestedCode((' ' + codeSnippet).slice(1));
  }

  useEffect( () => {
    function checkCode() {
      let codePassed = true;
      let scopeStack = [];
      let inQuotes = false;
      
      for (let i = 0; i < testedCode.length; i++ ){
        if (String(testedCode).charAt(i) === "\"" ) {
            inQuotes = !inQuotes;
            continue;
        }

        if (inQuotes) {
            continue;
        }

        if (String(testedCode).charAt(i) === "(") {
            scopeStack.push(String(testedCode).charAt(i));
        }
        else if (String(testedCode).charAt(i) === ")") {
            if (scopeStack.length === 0) {
                codePassed = false;
                break;
            }
            else {
                scopeStack.pop();
            }
        }
      }

      if (scopeStack.length > 0) {
          codePassed = false;
      }
      setResult(codePassed);
      setCodeSnippet("");
    }

    if (testedCode === ""){
      setResult("No code submitted");
    }
    else {
      checkCode();
    }
  }, [testedCode]);

  return (
    <><h1 className = "card-title">Lisp Code: Parentheses Checker</h1>
      <div className = "card-subsection">
        <form onSubmit={submitCode} >
          <label>
            Code to be tested:
            <textarea className="multiline-input" type="input" value={codeSnippet} onChange={updateCodeSnippet} />
          </label>
          <button type="submit">
            Test code
          </button>
        </form>
      </div>
      <div className="card-subsection">
        <div className = {typeof(result)==="boolean" ? String(result) : ""}>
          Code results: {String(result)}
        </div>
        <div className="code">
          {testedCode}
        </div>
      </div>
    </>
  );
}

export default LISPchecker;