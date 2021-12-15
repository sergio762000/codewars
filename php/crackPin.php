#!/usr/bin/php
<?php

function crack($hash) {
    $arr = [];

    for ($i = 0; $i <= 99999; $i++) {
        $arr[$i] = md5(sprintf("%05d", $i));
    }

    $i = 0;
    do {
        $searchHash = $arr[$i];
        ++$i;
    } while ($i < 100000 && $hash !== $searchHash);

    return sprintf("%05d", $i - 1);
}

crack('86aa400b65433b608a9db30070ec60cd');
crack('827ccb0eea8a706c4c34a16891f84e7b');

