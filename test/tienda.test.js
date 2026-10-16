import { test } from 'node:test';
import assert from 'node:assert/strict';
import { aplicarDescuento } from '../src/tienda.js';

test('40000 no tiene descuento', () => {
    const base = 40000;
    const resultado = aplicarDescuento(base);
    assert.equal(resultado, 40000);
});
test('60000 tiene 10% de descuento', () => {
    const base = 60000;
    const resultado = aplicarDescuento(base);
    assert.equal(resultado, 54000);
});
test('50000 justo en el límite tiene 10% de descuento', () => {
    const base = 50000;
    const resultado = aplicarDescuento(base);
    assert.equal(resultado, 45000);
});
