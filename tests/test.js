'use strict'

require('mocha-generators').install();

const expect = require('chai').expect;
const nightmare = require('nightmare');

describe('Springload Website - ', function() {
    this.timeout(10000);

    let night;

    before('setup nightmare instance', function() {
        night = nightmare({ show: true });
    });

    after('teardown nightmare instance', function*() {
        yield night.end();
    });

    describe('People Page - ', function() {
        before('go to page', function*() {
            yield night.goto('http://springload.co.nz/people');
        });

        it('page filters are all presents', function*() {
            const all = yield night.evaluate(() => document.querySelector('a[data-show-department=all]').innerText);
            expect(all).to.equal('Springload:');

            const pixel = yield night.evaluate(() => document.querySelector('a[data-show-department=design]').innerText);
            expect(pixel).to.equal('pixel wranglers');

            const feds = yield night.evaluate(() => document.querySelector('a[data-show-department=fed]').innerText);
            expect(feds).to.equal('front-end nerds');

            const beds = yield night.evaluate(() => document.querySelector('a[data-show-department=dev]').innerText);
            expect(beds).to.equal('proper nerds');

            const chat = yield night.evaluate(() => document.querySelector('a[data-show-department=am]').innerText);
            expect(chat).to.equal('chatty types');

            const fat = yield night.evaluate(() => document.querySelector('a[data-show-department=bosses]').innerText);
            expect(fat).to.equal('fat cats');

            const hard = yield night.evaluate(() => document.querySelector('a[data-show-department=studio]').innerText);
            expect(hard).to.equal('hard workers');
        });

        it('fat-cats filter works', function*() {
            yield night.click('a[data-show-department=bosses]');
            
            const visible = yield night.visible('div[data-department-id=bosses]');
            expect(visible).to.equal(true);

            const visibleYou = yield night.visible('div.chameleon--you');
            expect(visibleYou).to.equal(true);

            const notVisible = yield night.visible('div.human:not(.chameleon--you):not([data-department-id=bosses])');
            expect(notVisible).to.equal(false);
        });

        it('pixel-wranglers filter works', function*() {
            yield night.click('a[data-show-department=design]');
            
            const visible = yield night.visible('div[data-department-id=design]');
            expect(visible).to.equal(true);

            const visibleYou = yield night.visible('div.chameleon--you');
            expect(visibleYou).to.equal(true);

            const notVisible = yield night.visible('div.human:not(.chameleon--you):not([data-department-id=design])');
            expect(notVisible).to.equal(false);
        });

        it('fed filter works', function*() {
            yield night.click('a[data-show-department=fed]');

            const visible = yield night.visible('div[data-department-id=fed]');
            expect(visible).to.equal(true);

            const visibleYou = yield night.visible('div.chameleon--you');
            expect(visibleYou).to.equal(true);

            const notVisible = yield night.visible('div.human:not(.chameleon--you):not([data-department-id=fed])');
            expect(notVisible).to.equal(false);
        });

        it('am filter works', function*() {
            yield night.click('a[data-show-department=am]');

            const visible = yield night.visible('div[data-department-id=am]');
            expect(visible).to.equal(true);

            const visibleYou = yield night.visible('div.chameleon--you');
            expect(visibleYou).to.equal(true);

            const notVisible = yield night.visible('div.human:not(.chameleon--you):not([data-department-id=am])');
            expect(notVisible).to.equal(false);
        });

        it('dev filter works', function*() {
            yield night.click('a[data-show-department=dev]');

            const visible = yield night.visible('div[data-department-id=dev]');
            expect(visible).to.equal(true);

            const visibleYou = yield night.visible('div.chameleon--you');
            expect(visibleYou).to.equal(true);

            const notVisible = yield night.visible('div.human:not(.chameleon--you):not([data-department-id=dev])');
            expect(notVisible).to.equal(false);
        });

        it('studio filter works', function*() {
            yield night.click('a[data-show-department=studio]');

            const visible = yield night.visible('div[data-department-id=studio]');
            expect(visible).to.equal(true);

            const visibleYou = yield night.visible('div.chameleon--you');
            expect(visibleYou).to.equal(true);

            const notVisible = yield night.visible('div.human:not(.chameleon--you):not([data-department-id=studio])');
            expect(notVisible).to.equal(false);
        });

        it('all filter works', function*() {
            yield night.click('a[data-show-department=all]');

            const visible = yield night.visible('div.human');
            expect(visible).to.equal(true);
        });
    });
});