function titleCase(str) {
  let splitLowerStr = str.toLowerCase().split(" "); //spliting in lowercase
  let output = splitLowerStr.map((value) => {
    return value.replace(value.charAt(0), value.charAt(0).toUpperCase()); //then creating function on splitted and lowercase string using map to replace the 1st letter with uppercase..
  });
  return output.join(" "); //finally join the output
}

titleCase("I'm a little tea pot");
