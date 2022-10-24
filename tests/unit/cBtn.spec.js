import { shallowMount } from '@vue/test-utils'
import { expect } from 'chai'
import cBtn from '@/components/cBtn/cBtn.vue'

describe('cBtn', () => {

  // First scenario
  it('Renders default button', () => {
    const msg = 'new message'
    const wrapper = shallowMount(cBtn, {
      propsData: {
        label: msg
      }
    })

    expect(wrapper.text()).to.include(msg);
    expect(wrapper.find('.btn').exists()).to.be.true;
    expect(wrapper.find('.btn-default').exists()).to.be.true;
    expect(wrapper.find('.btn-primary').exists()).to.be.false;
  })

  // Second scenario
  it('Renders button with color', () => {
    const msg = 'new message'
    const wrapper = shallowMount(cBtn, {
      propsData: {
        label: msg,
        color: 'primary'
      }
    })

    expect(wrapper.text()).to.include(msg)
    expect(wrapper.find('.btn').exists()).to.be.true;
    expect(wrapper.find('.btn-default').exists()).to.be.false;
    expect(wrapper.find('.btn-primary').exists()).to.be.true;
  })


  // Third scenario

});