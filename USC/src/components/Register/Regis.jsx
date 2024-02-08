import { View, Text } from 'react-native'
import React from 'react'

export default function Regis() {
    return (
        <div className="flex flex-col items-stretch pb-12 bg-white">
          <div className="flex gap-5 justify-between items-stretch px-20 py-8 w-full bg-white border-b border-solid border-b-stone-300 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
            <div className="flex flex-col shrink-0 bg-zinc-300 h-[60px] rounded-[84px] w-[121px]" />
            <div className="flex gap-5 justify-between items-stretch max-md:flex-wrap max-md:max-w-full">
              <div className="flex gap-5 justify-between items-stretch self-start mt-5 max-md:flex-wrap max-md:max-w-full">
                <div className="grow items-stretch pb-3 text-xl whitespace-nowrap text-neutral-900">
                  Scholarship Finders
                </div>
                <div className="grow items-stretch pb-3 text-xl whitespace-nowrap text-neutral-900">
                  College Tool
                </div>
                <div className="items-stretch pb-3 text-xl aspect-[1.78] text-neutral-900">
                  Advise
                </div>
                <div className="grow items-stretch pb-3 text-xl text-neutral-900">
                  Communication
                </div>
                <div className="grow items-stretch pb-3 text-xl whitespace-nowrap text-neutral-900">
                  About Us
                </div>
              </div>
              <div className="flex flex-col shrink-0 bg-zinc-300 h-[60px] rounded-[84px] w-[60px]" />
            </div>
          </div>
          <div className="flex flex-col items-stretch px-20 w-full max-md:px-5 max-md:max-w-full">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1480facb74018e5f1f2711496ca1ddb958d25b22ced4e9eb740138f7e49468c0?apiKey=cb385fe764144f1da1450678a6b41140&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1480facb74018e5f1f2711496ca1ddb958d25b22ced4e9eb740138f7e49468c0?apiKey=cb385fe764144f1da1450678a6b41140&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1480facb74018e5f1f2711496ca1ddb958d25b22ced4e9eb740138f7e49468c0?apiKey=cb385fe764144f1da1450678a6b41140&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1480facb74018e5f1f2711496ca1ddb958d25b22ced4e9eb740138f7e49468c0?apiKey=cb385fe764144f1da1450678a6b41140&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1480facb74018e5f1f2711496ca1ddb958d25b22ced4e9eb740138f7e49468c0?apiKey=cb385fe764144f1da1450678a6b41140&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1480facb74018e5f1f2711496ca1ddb958d25b22ced4e9eb740138f7e49468c0?apiKey=cb385fe764144f1da1450678a6b41140&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1480facb74018e5f1f2711496ca1ddb958d25b22ced4e9eb740138f7e49468c0?apiKey=cb385fe764144f1da1450678a6b41140&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1480facb74018e5f1f2711496ca1ddb958d25b22ced4e9eb740138f7e49468c0?apiKey=cb385fe764144f1da1450678a6b41140&"
              className="object-contain object-center mx-5 w-full aspect-[3.7] max-md:mr-2.5 max-md:max-w-full"
            />
            <div className="mx-5 mt-20 text-3xl text-green-600 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
              Đăng ký tư vấn
            </div>
            <div className="py-px pl-20 mx-5 mt-3.5 rounded-lg border border-dashed border-zinc-400 max-md:pl-5 max-md:mr-2.5 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch">
                <div className="flex flex-col items-stretch w-[38%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col items-stretch mt-16 max-md:mt-10 max-md:max-w-full">
                    <div className="flex gap-5 justify-between items-stretch self-center max-w-full w-[508px] max-md:flex-wrap">
                      <div className="flex flex-col flex-1 items-stretch">
                        <div className="text-base font-medium text-black whitespace-nowrap">
                          Thông tin cá nhân
                        </div>
                        <div className="flex flex-col shrink-0 self-center mt-3 rounded-full h-[21px] w-[21px]" />
                      </div>
                      <div className="flex flex-col flex-1 items-stretch self-start">
                        <div className="text-base font-medium whitespace-nowrap text-stone-300">
                          Thông tin du học
                        </div>
                        <div className="flex flex-col shrink-0 self-center mt-3 rounded-full h-[21px] w-[21px]" />
                      </div>
                      <div className="flex flex-col flex-1 items-stretch">
                        <div className="text-base font-medium text-center whitespace-nowrap text-stone-300">
                          Hoàn thành
                        </div>
                        <div className="flex flex-col shrink-0 self-center mt-4 rounded-full h-[21px] w-[21px]" />
                      </div>
                    </div>
                    <div className="justify-center items-start px-9 py-6 mt-10 text-base whitespace-nowrap rounded bg-zinc-100 text-stone-300 max-md:px-5 max-md:max-w-full">
                      Họ và Tên
                    </div>
                    <div className="flex gap-5 justify-between items-stretch mt-10 max-md:flex-wrap max-md:max-w-full">
                      <div className="grow justify-center items-start px-9 py-6 text-base whitespace-nowrap rounded bg-zinc-100 text-stone-300 max-md:px-5">
                        Giới tính
                      </div>
                      <div className="grow justify-center items-start px-9 py-6 text-base whitespace-nowrap rounded bg-zinc-100 text-stone-300 max-md:px-5">
                        Ngày sinh
                      </div>
                    </div>
                    <div className="justify-center items-start px-10 py-6 mt-10 text-base whitespace-nowrap rounded bg-zinc-100 text-stone-300 max-md:px-5 max-md:max-w-full">
                      Địa chỉ
                    </div>
                    <div className="flex gap-5 justify-between items-stretch mt-10 max-md:flex-wrap max-md:max-w-full">
                      <div className="grow justify-center items-start px-10 py-6 text-base rounded bg-zinc-100 text-stone-300 max-md:px-5">
                        Phường
                      </div>
                      <div className="grow justify-center items-start px-10 py-6 text-base rounded bg-zinc-100 text-stone-300 max-md:px-5">
                        Quận
                      </div>
                    </div>
                    <div className="justify-center items-start px-10 py-6 mt-10 text-base whitespace-nowrap rounded bg-zinc-100 text-stone-300 max-md:px-5 max-md:max-w-full">
                      Số Điện Thoại
                    </div>
                    <div className="justify-center items-start px-10 py-6 mt-10 text-base rounded bg-zinc-100 text-stone-300 max-md:px-5 max-md:max-w-full">
                      Email
                    </div>
                    <div className="justify-center items-stretch self-center px-8 py-4 mt-10 text-base text-white whitespace-nowrap bg-green-600 rounded max-md:px-5">
                      Tiếp tục
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-stretch ml-5 w-[62%] max-md:ml-0 max-md:w-full">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2d1f9a2f-b3f5-48a6-b84b-bdb98cc99abf?apiKey=cb385fe764144f1da1450678a6b41140&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2d1f9a2f-b3f5-48a6-b84b-bdb98cc99abf?apiKey=cb385fe764144f1da1450678a6b41140&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2d1f9a2f-b3f5-48a6-b84b-bdb98cc99abf?apiKey=cb385fe764144f1da1450678a6b41140&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2d1f9a2f-b3f5-48a6-b84b-bdb98cc99abf?apiKey=cb385fe764144f1da1450678a6b41140&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2d1f9a2f-b3f5-48a6-b84b-bdb98cc99abf?apiKey=cb385fe764144f1da1450678a6b41140&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2d1f9a2f-b3f5-48a6-b84b-bdb98cc99abf?apiKey=cb385fe764144f1da1450678a6b41140&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2d1f9a2f-b3f5-48a6-b84b-bdb98cc99abf?apiKey=cb385fe764144f1da1450678a6b41140&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2d1f9a2f-b3f5-48a6-b84b-bdb98cc99abf?apiKey=cb385fe764144f1da1450678a6b41140&"
                    className="object-contain object-center grow w-full aspect-[0.85] max-md:mt-8 max-md:max-w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}