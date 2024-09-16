const isEven = (req, res) => {
  const { number } = req.body;

  if (number % 2 === 0) {
    return res.send({ message: `El numero ${number} es par.` });
  }

  return res.send({ message: `El numero ${number} es impar.` });
};

module.exports = isEven;
