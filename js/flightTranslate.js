var options3 = {
  shouldSort: true,
  threshold: 0.4,
  maxPatternLength: 32,
  keys: [
    "iata"
  ]
};

var fuse3 = new Fuse(airlines, options3);
