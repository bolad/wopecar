import { Controller } from "@hotwired/stimulus"

import {enter, leave, toggle} from 'el-transition'


export default class extends Controller {

    static targets = ['dropDown','openUserMenu']

  connect() {
    this.openUserMenuTarget.addEventListener("click", (e) => {
        openDropDown(this.dropDownTarget)
    })
    
  }
  
}

function openDropDown(element) {
    toggle(element).then(() => {
        console.log("Enter transition complete")
    })
}

// remove element when close
function closeDropDown() {
    leave(this.dropDownTarget).then(() => {
        element.destroy();
    })
}
