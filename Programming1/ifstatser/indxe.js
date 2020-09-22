const maxWeight = 80;
const max_length = 55;
const max_bredd = 40;
const max_height = 23;

const persons_Weight_package = 171;
const persons_Length_package = 53;
const persons_bredd_package = 200;
const persons_height_package = 10;

let errors = [];

if (maxWeight <= persons_Weight_package) {
  errors.push({
    error: "Too heavy.",
  });
}

if (max_length <= persons_Length_package) {
  errors.push({
    error: "Length too high",
  });
}

if (max_bredd <= persons_bredd_package) {
  errors.push({
    error: "Bredd too high",
  });
}

if (max_height <= persons_height_package) {
  errors.push({
    error: "Height too tall.",
  });
}

console.log(errors);
