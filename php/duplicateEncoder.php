#!/usr/bin/php
<?php

/**
 * Цель этого упражнения - преобразовать строку в новую строку,
 * где каждый символ в новой строке равен "(",
 * если этот символ появляется только один раз в исходной строке,
 * или ")", если этот символ появляется более одного раза в исходной строке.
 * Игнорируйте заглавные буквы при определении того, является ли символ дубликатом.
 *
 * @param $word
 * @return string
 */

function duplicate_encode($word){
    $result = '';

    $arrSymbol = str_split(strtolower($word));
    $tempArray = array_count_values($arrSymbol);

    foreach ($arrSymbol as $key => $item) {
        $result .= $tempArray[$item] != 1 ? ')' : '(';
    }

    return $result;
}

duplicate_encode('din');
duplicate_encode('recede');
duplicate_encode('Success');
duplicate_encode('iiiiii');
duplicate_encode(' ( ( )');

