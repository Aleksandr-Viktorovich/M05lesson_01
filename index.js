'use strict';


const biohazard = document.querySelector('.ads');
const itemsAll = document.querySelector('.items');
const listOne = document.querySelector('.item_one');
const listTwo = document.querySelector('.item_two');
const listThree = document.querySelector('.item_three');
const props = document.querySelectorAll('.props__list');
const propsItem = document.querySelectorAll('.props__item_four');
const propsItemTwo = document.querySelectorAll('.props__item_two');
const title = document.querySelectorAll('.item__title')

biohazard.remove();

itemsAll.prepend(listOne);
listOne.after(listTwo);
listTwo.after(listThree);
propsItem[2].append(propsItem[5])
title[3].append(props[3]);
title[2].append(props[4]);
props[2].append(propsItemTwo[8]);
props[2].append(propsItemTwo[9]);


