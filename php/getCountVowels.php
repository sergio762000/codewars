#!/usr/bin/php
<?php

function getCount($str) {
    $str = str_replace(' ', '', $str);
    return count(preg_grep("#^[aeiou]+$#", str_split($str)));
}

getCount("abracadabra e ro ru ri");

