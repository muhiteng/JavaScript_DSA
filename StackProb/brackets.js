function isValidExp(s) {
  let stack = [];
  const brackets = ["(", ")", "[", "]", "{", "}"];
  const obj_close = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  
let close=true;
  for (let i = 0; i < s.length; i++) {
    const current = s[i];

    // if the value is bracket  (,[,{
    if (brackets.includes(current)) {
      // if the value is close bracket },],)
      console.log(obj_close[current]);
      if (obj_close[current]) {
        stack.push(obj_close[current]);
      } else if (stack.pop() != current) {
        close=false;
        break;
      }
    }
  }
  return (stack.length === 0 && close) ? "YES" : "NO";
}

console.log(isValidExp("3"));
console.log("===========================");
console.log(isValidExp("{[()]}"));
console.log(isValidExp("{[(])} "));
console.log(isValidExp("{{[[(())]]}}"));
console.log("===========================");
console.log(isValidExp("{(([])[])[]}"));
console.log(isValidExp("[]"));
console.log(isValidExp("{(([])[])[]}[]"));
