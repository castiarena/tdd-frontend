import 'jsdom-global/register'
import 'jest-styled-components';
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme'
import { toMatchImageSnapshot } from 'jest-image-snapshot';
import Button from '../src/Button';

expect.extend({ toMatchImageSnapshot });

const imageFromRender = async (jsxComponent) => {
    document.body.appendChild(document.createElement('main'));
    const main = document.querySelector('main');
    ReactDOM.render(jsxComponent, main);

    const renderedMainSize = await page.evaluate(
        ({ head, body, size}) => {
            document.head.innerHTML = head;
            document.body.innerHTML = body;
            document.body.style.margin = '0';
            document.body.style.padding = '0';
            const main = document.querySelector('main');
            const mainFirstChild = main.querySelector('*:first-child');
            main.style.display = 'inline-block';
            const margins = window.getComputedStyle(mainFirstChild, null).getPropertyValue('margin')
                .split(' ').map( i => parseInt(i.replace(/px/g, '')));
            return {
                margins,
                width: main.clientWidth,
                height: main.clientHeight
            };
        }, { head: document.head.innerHTML, body: document.body.innerHTML} );
    const [mTop = 0, mRight = mTop, mBottom = 0, mLeft = 0] = renderedMainSize.margins;
    page.setViewport({
        height: renderedMainSize.height + mTop + mBottom,
        width: renderedMainSize.width + mRight + mLeft
    });
    return page.screenshot();
};

describe('Test by pixels', () => {

    it('Button mount and render', async () => {
        const img = await imageFromRender(<Button>Button</Button>);
        expect(img).toMatchImageSnapshot();
    });

});