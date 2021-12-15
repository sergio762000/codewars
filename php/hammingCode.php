<?php
/**
 * Функция перевода текста в двоичный код с утроением битов
 * @param $text
 * @return string
 */
function encode($text) {
    $result = '';

    if (strlen($text) > 0) {
        $arrChar = str_split($text);


        foreach ($arrChar as $key => $item) {
            $arrChar[$key] = sprintf('%08d', decbin(ord($item)));
        }

        foreach ($arrChar as $key => $item) {
            $itemBits = str_split($item);
            $newBits = '';
            foreach ($itemBits as $oneBit) {
                $newBits .= $oneBit . $oneBit . $oneBit;
            }
            $arrChar[$key] = $newBits;
        }

        $result = implode('', $arrChar);
    }

    return $result;
}

encode('hey');
encode('');

/**
 * Функция восстановления текста с тройным резервированием битов
 * @param $bits
 * @return string
 */
function decode($bits) {
    $arrBit = [];

    $arrTripleBits = str_split($bits, 3);

    foreach ($arrTripleBits as $tripleBit) {
        $arrBits = str_split($tripleBit);
        if (array_sum($arrBits) >= 2) {
            $arrBit[] = 1;
        } else {
            $arrBit[] = 0;
        }
    }

    $arrChar = str_split(implode($arrBit), 8);

    foreach ($arrChar as $key => $item) {
        $arrChar[$key] = chr(bindec($item));
    }

    echo join('', $arrChar);
}

decode('100111111000111001000010000111111000000111001111000111110110111000010111');
