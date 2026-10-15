import { test } from 'node:test';
import assert from 'node:assert/strict';
import { sumar, dividir } from '../src/calculadora.js';

test('sumar 2 + 3 devuelve 5', () => {
    // Arrange (preparar): los datos de entrada
    const a = 2;
    const b = 3;
    // Act (ejecutar): llamar a la función
    const resultado = sumar(a, b);
    // Assert (verificar): comparar con lo esperado
    assert.equal(resultado, 5);
});
test('sumar -4 + 1 devuelve -3', () => {
    // Arrange (preparar): los datos de entrada
    const a = -4;
    const b = 1;
    // Act (ejecutar): llamar a la función
    const resultado = sumar(a, b);
    // Assert (verificar): comparar con lo esperado
    assert.equal(resultado, -3);
});

test('dividir 10 / 2 devuelve 5', () => {
    // Arrange (preparar): los datos de entrada
    const a = 10;
    const b = 2;
    // Act (ejecutar): llamar a la función
    const resultado = dividir(a, b);
    // Assert (verificar): comparar con lo esperado
    assert.equal(resultado, 5);
});
test('dividir 10 / 0 devuelve error', () => {
    // Arrange (preparar): los datos de entrada
    const a = 10;
    const b = 0;

    assert.throws(() => dividir(10, 0), { message: 'No se puede dividir por cero'
    });
});