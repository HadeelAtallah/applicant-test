import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <div
      class="bg-gray-300 text-white px-8 border-b-4 border-buhlerblue w-full h-max cursor-default shadow-sm"
    >
      <div class="flex justify-between h-14 m-auto">
        <div class="flex flex-col justify-center h-full">
          <img class="w-34 h-10" src="assets/images/logo.png" alt="Buhler" />
        </div>
        <div class="flex h-full text-right space-x-10 text-black">
          <div class="flex justify-center items-center">
            <p class="text-black p-1 -mb-1">
              <span class="material-icons"> schedule </span>
            </p>
            <p class="p-1">{{ date | date: 'dd.MM.yyyy hh:mm' }}</p>
          </div>
          <div class="flex justify-center items-center">
            <p class="text-black p-1 -mb-1">
              <span class="material-icons"> account_circle </span>
            </p>
            <p class="p-1">Operator</p>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class NavBarComponent implements OnInit {
  //current date
  date = new Date();

  ngOnInit() {}
}
