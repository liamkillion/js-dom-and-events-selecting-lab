const expect = chai.expect;

describe('index', () => {
  describe('selectElementById', function(){
    it('selects an element by the id', function(){
      expect(selectElementById('grand-node').id).to.equal('grand-node')
      expect(selectElementById('app').id).to.equal('app')
    })

    it('uses getElementById to select the element', function(){
      let spygetElementById = sinon.spy(document, 'getElementById')
      selectElementById('grand-node')
      expect(spygetElementById.calledWith('grand-node')).to.equal(true)
      spygetElementById.restore()
    })
  })

  describe('selectElementsByClassName', function(){
    it('selects an element by the class name', function(){
      expect(selectElementsByClassName('unranked-list')[0].className).to.equal('unranked-list')
      expect(selectElementsByClassName('ranked-list')[0].className).to.equal('ranked-list')
    })

    it('uses getElementById to select the element', function(){
      let spygetElementsByClassName = sinon.spy(document, 'getElementsByClassName')
      selectElementsByClassName('unranked-list')
      expect(spygetElementsByClassName.calledWith('unranked-list')).to.equal(true)
      spygetElementsByClassName.restore()
    })
  })

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
