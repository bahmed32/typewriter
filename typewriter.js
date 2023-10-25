const sentence = " hello there from lhl";
let delay = 0;
for (const char of sentence) {
  // process.stdout.write(char)

  setTimeout(() =>
    process.stdout.write(char + "\n")
    , delay += 1000);

}






