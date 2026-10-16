![Tests](https://github.com/LioxAcc/practico-tests-
node/actions/workflows/tests.yml/badge.svg)

# practico-tests-node
¿Por qué el compañero no encontró el bug probando solo con 40000 y 60000?
Porque ninguno de esos valores es el límite: 40000 está por debajo y 60000 por encima de 50000, así que con > y con >= el resultado es el mismo, el error solo aparece justo en 50000.
