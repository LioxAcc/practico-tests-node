import { describe, test } from 'node:test';
import assert from 'node:assert/strict';
import { clasificar, promedio, aprobados } from '../src/notas.js';


describe('clasificar', () => {
    test('3.99 es Libre', () => {
        const nota = 3.99;
        const resultado = clasificar(nota);
        assert.equal(resultado, 'LIBRE'); 
    });
    test('4 es Regular', () => {
        const nota = 4;
        const resultado = clasificar(nota);
        assert.equal(resultado, 'REGULAR'); 
    });
    test('5.99 es Regular', () => {
        const nota = 5.99;
        const resultado = clasificar(nota);
        assert.equal(resultado, 'REGULAR'); 
    });
    test('6 es Promociona', () => {
        const nota = 6;
        const resultado = clasificar(nota);
        assert.equal(resultado, 'PROMOCIONA'); 
    });
    test('10 es Promociona', () => {
        const nota = 10;
        const resultado = clasificar(nota);
        assert.equal(resultado, 'PROMOCIONA'); 
    });
    test('11 lanza RangeError', () => {
        const nota = 11;
        assert.throws(() => clasificar(nota), RangeError) 
    });
});

describe('promedio', () => {
    test('[6, 8, 10] da 8', () => {
        assert.equal(promedio([6, 8, 10]), 8);
    });
    test('una sola nota devuelve esa nota', () => {
        assert.equal(promedio([7]), 7);
    });
    test('lista vacía lanza error', () => {
        assert.throws(() => promedio([]));
    });
});

describe('aprobados', () => {
    test('[3, 6, 9, 5] devuelve solo las notas >= 6', () => {
        assert.deepEqual(aprobados([3, 6, 9, 5]), [6, 9]);
    });
    test('lista vacía devuelve lista vacía', () => {
        assert.deepEqual(aprobados([]), []);
    });
});