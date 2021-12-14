#!/usr/bin/php
<?php
/**
 * Напишите функцию, которая принимает целое число в качестве входных данных
 * и возвращает количество битов, равное единице в двоичном представлении этого числа.
 * Входные данные неотрицательны.
 *
 * @param $n
 * @return void
 */

function countBits($n)
{
    $n = substr_count(decbin($n), '1');
    echo $n . PHP_EOL;
}

countBits(0);
countBits(4);
countBits(7);
countBits(9);
countBits(10);
