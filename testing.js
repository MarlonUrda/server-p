const operator = (req, res) => {
  const { num1, num2, op } = req.body;
  console.log(op);

  console.log("Ejecutando");

  switch (op) {
    case "suma":
      return res.send({ result: num1 + num2 });
    case "resta":
      return res.send({ result: num1 - num2 });
    case "multiplicacion":
      return res.send({ result: num1 * num2 });
    case "division":
      if (num2 === 0) {
        return res.send({ error: "No se puede dividir por cero" });
      }
      return res.send({ result: num1 / num2 });
    default:
      return res.send({ error: "Operacion no valida" });
  }
  console.log(`The user: ${req.session.user} has made a request`);
};

module.exports = operator;
