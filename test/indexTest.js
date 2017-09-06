const expect = chai.expect;

describe('index', () => {
  describe('getFirstSelector(selector)', () => {
    it('returns the first element that matches the selector', () => {
      expect(getFirstSelector('div').id).to.equal('grand-node')
      expect(getFirstSelector('.ranked-list')).to.equal(document.querySelector('.ranked-list'))
    })
  })

  describe('rankedLis()', () => {
    it('returns a Nodelist of list elements with the ranked towns', () => {
      expect(rankedLis().length).to.equal(5)
      expect(rankedLis()).to.be.a('nodelist')

    })
    it('selects on the ranked towns ranked towns', () => {
      expect(Array.from(rankedLis()).map((el) => {return el.innerHTML })).to.have.same.members( ["Downtown", "Midtown", "Financial District", "Chelsea", "Flatiron District"])
    })
  })

  describe('companyStrategy()', () => {
    it("returns the deeply encouraging remark of 'We can do it!'", () => {
      console.log(companyStrategy().innerHTML)
      expect(companyStrategy().innerHTML.trim()).to.equal("We can do it!")
    })
  })
})
