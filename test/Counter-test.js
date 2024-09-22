const { expect } = require("chai");

describe("Counter", function () {
    let counter;

    beforeEach(async function () {
        const Counter = await ethers.getContractFactory("Counter");
        counter = await Counter.deploy();
        await counter.deployed();
    });

    it("Should start with a count of 0", async function () {
        expect(await counter.getCount()).to.equal(0);
    });

    it("Should increment the count", async function () {
        await counter.increment();
        expect(await counter.getCount()).to.equal(1);
    });

    it("Should decrement the count", async function () {
        await counter.increment();
        await counter.decrement();
        expect(await counter.getCount()).to.equal(0);
    });

    it("Should not allow decrementing below 0", async function () {
        await expect(counter.decrement()).to.be.revertedWith("Count cannot be negative");
    });
});
