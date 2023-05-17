const Cars = [
    {
        id:1,
        image:'https://s3-alpha-sig.figma.com/img/7680/57c1/cde3a1cc70e0a39c9016ed3fef35e7e4?Expires=1685318400&Signature=mYPp4hQF4Mf-X-O~cR1ZxaI3XEwBPqaDox6Gvvn2EEPytJZLM6OE7~wfO2SRqPpMByz~A04L-J8n-~ATN3m5HMGsC5WNGPiaLbBnoT4w2FpOAqPAfgKhh4CcnrtbmQTTCsY6i5TIMJQk98gMBaLRH-9BIQkNjO1pUW-ll-mpXXO9wJXcrClIU9iMeIhPAcbb82FIq5jafSr-YZKckoYqItbU-QG8sHXrLilUHBYffyIDDYNQyXfuEPczVJKbRx1I83iePIb5dDYtoqrpSU4w0B-dEGMCZFuxEwtXO1ijO0GBb~moFQ-IcJUUkCMk-fwFQ9QBzYw0SQ~XcwqI1Z4-bA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        name:"2016 Acura Nsx",
        price:"$28.546",
        dis:'5,0000+km',
        use:'Used 2022 Manual Oranged Petrol'
    },
    {
        id:2,
        image:'https://s3-alpha-sig.figma.com/img/1aba/36ff/05a1a06bf708c1f768eacd9e09e9f370?Expires=1685318400&Signature=XhhbN6NHpinMxdUAjPSeoQdxrnodZS51uh5vXcL5L9yTc5SpSEsoDq8LhvVnmO2lUZnKshY5Qx~O~zj2G5LEZcmweLZBH-FweawF1QwWkKPZ-8tty62OpoDxfn8tzY9PFVJq8DK6Uw9yEVZ0vt36jLxIn4lwx6GGNQzXOGH17zZBVivJQ-vqgbuwMsEcMucCk0wTxKS4d4oF-icUXYVHNrQHV5pVwbBqXH49giIih42tqOLo0n~VSa53ZrJCK3zPgzyH0gnIxqKMwO9Wf7lTM9fRskiVZr1tzeo9WmuWFxAjUAADfZk7N~hwjKFxd41w~8SlPvIS6mKjR51cKKbLtw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        name:"Land Rover Range Rover",
        price:"$44.546",
        dis:'5,0000+km',
        use:'Used 2022 Manual Oranged Petrol'
    },
    {
        id:3,
        image:'https://s3-alpha-sig.figma.com/img/800e/602e/4c55603d0c55efd9681d49f324482f4b?Expires=1685318400&Signature=JiAySy~o9qBTywYishuOHiKQ5avE3gAezV4OFCx~JdD7UKA3Xm~VPcObnpc4hrbbA7imEgqDr-~iMKEI7hsd1Rii~BML47QI6yVG8V0ZO3Baomjlsu-Nwj0GtTMo-3gArv7VadRNWnPcrMNuV267txc4jDKxtvEa7PHbu2AB0OaSdIGM361BWSpowsVMhncSONzRS0-37V7By8R6UMZeFmXbqD1-5yazAyENKs0OTAVs6kRCr3v-5ApLh847PXYxlFHgiMalQKidVB6rL1hEmnmgeso-MmVMEKqiu~fc8NoQi6SQpdO6Oo5RgwCtN9xsmo0u5Z5FkBQSEdEsczAKKQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        name:"Acura Rlx Spport Hybord",
        price:"$44.60",
        dis:'33,000+km',
        use:'Used 2022 Manual Oranged Petrol'
    },
    {
        id:4,
        image:'https://s3-alpha-sig.figma.com/img/5ea5/aab8/571e8a7f23124bec6db0264cf25d3f3d?Expires=1685318400&Signature=Uapvj9kvOJ97N3BjdiQulrKB49eaqmDENOrfvjZwUgc1f-6kMg6Hzeqb0tYekOhxxz~FIv7eZYmBGBSSL9mD3U~We7OgYBPJUMSffE2oHY1gUiRR532GnuVXGfzcW8WoBjWmOrpeACJ73LQu5iRCHBr0T-aXafK9zrLZQiPXMzWSxPEl8w8SDKHeicKUepuTU0Ai9rmgDjm5yc~lE56U~2dAqMSa5sd7bhIjhsAnbCO7RxTbro5JW-0VfUDKqEGPl6LxRVm7k1XhicdIPT~qWE1bXA8zwvL7qePFrHTzwRLiXrBj6318Qk0b9lfyEDRtIaDufhMwH0BdxlPNQ8ZnWw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        name:"2022 Nisan Juke",
        price:"$49.60",
        dis:'12,000+km',
        use:'Used 2022 Manual Oranged Petrol'
    },
    {
        id:5,
        image:'https://s3-alpha-sig.figma.com/img/4a6d/9128/36907e1c032a4fb4096d7ddbee3f8aed?Expires=1685318400&Signature=EVHWpK-29LrSOSXP9BzV30u8rugByObtV23YWhdCrd-kv-Xnd0VpooUpef9TVnUD3B1hvBJql5wtCKC-awXDUMlKA8pX16pXuhq4Zif8Um5X0M3mVrx7Mpa7gylueevdZ5sL566HHeRGkH7YXPx6EQlM~k-PGVOJnLQlik6toZzQa4C-my5L40kVPInKlGpYjAt4t0HBhXe5jFcNT~kA9ul1AKV-ji91-u8Ar7PAAhGA-iF68MDgabOIv69sAXG6q0SyzMMQdpI4TtjBhcKOajJfQ5zYV2LR26zE1ELhTEiYpXYf4J8mPYp99VAlHV49a1GEll6tot~YbB~6aorjKg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        name:"2022 Mercedes AG C63",
        price:"$95.900",
        dis:'12,000+km',
        use:'Used 2022 Manual Oranged Petrol'
    },
    {
        id:6,
        image:'https://s3-alpha-sig.figma.com/img/0634/9d27/b386d4703f1d9f4552cb88cc429a0e05?Expires=1685318400&Signature=JpU2~raYAITGZ9aLLGrezIhpxeCej4jCT5F-USR2hbaVqhoQKBaXIDP-rcj3q456CiNy3rV6B9lW6BDmll3cGogR2SkAN~eSDFbEJTwxr4RJkba4u5~uDexfnuIWlH0VccRj8IW1vMPIasGLso7UanF2No0Ck6IYsqXUosOTaJSReDiTpCEl8rH-CmRuEcpGXvRAiIbFkxxSmjL92VBPo44H6rG4s5f07Gp5cwJr16YRgYnwbPMXhgCpSrq-CFporBeKeHjs3VghiahI6hhegmdd8Eecdbfl4-jQR6r5wiveGdhAi7j9wKkYnezxDr-7Pa0Aw0-aDAmuI-RyKwx3UA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        name:"Brabus850 6.0 Biturbo Coupe",
        price:"$24.995",
        dis:'5,0000+km',
        use:'Used 2022 Manual Oranged Petrol'
    },
    {
        id:7,
        image:'https://s3-alpha-sig.figma.com/img/3c85/e13e/09cec32deb14d54f72bef6b039939a62?Expires=1685318400&Signature=ekKPTNyBE7mqPw20f8Aqsw7ZctXPD0~QL7H6kQCYOY6xkXwFhrfXUEB~rEdMGnpDJwZ79AfMRm0J8p6FGm9F6eAo98ojEggUlwg6NRSPV0xZ~aEcjVUbWS63S5Xlg~A674o-lBaypUjANY3xeMquYLv9P-ON66rizSycL4MBd~ha6TXFBK4~oYb-I-7PVoTuoCyJJuchJFalH9OIHHxJfulQTTAil6uWq0dotfXiknEBn7qMa5pDTCsYTIU5K7q2J9vNjU2ERUzU2tj9~iwNuW6xGdhG9Y~6G8u~9DQMUhqqylbIH--le4bwS4bV8OWcj31u6jE-FvReYhMB~NtQgw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        name:"Mercedes-AAGS 63",
        price:"$45.246",
        dis:'15,000+km',
        use:'Used 2022 Manual Oranged Petrol'
    },
    {
        id:8,
        image:'https://s3-alpha-sig.figma.com/img/0648/28be/7921fcd56432eb07017918981c2f37d1?Expires=1685318400&Signature=L499vGPvxQpUQZWnb6frRYFpTE8K1Qpr-mafYsBqhTOqKGv5NcWoNZ4~0cAVTwa92g0fmzhIz0Vucti6SkRAifxZXO~krdRvlIvANa6qHyBjyDB16F0UFrar1N03vbTB3lk5du3T71Tr8lp5Epx-PXP0IcZgpLzUC0ikZk5FJZ~1de7NrWOui5ml05ZqWU5FTZIpLnKzWUL7oFudXqHyJ3FQA-nlskPizSCytXXkvBBvo6MJDT9onq93G2nLUBsx0cdLtgHCgZsQ5FmmDv54ibiMRjiPWlJmFhJnc35qOAB3ePFYSB2UUDy6dSXVM0xCsLrB8O9d48t123W0~tSclw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        name:"Acura MDX Types First Drive",
        price:"$35.546",
        dis:'17,000+km',
        use:'Used 2022 Manual Oranged Petrol'
    },
    {
        id:9,
        image:'https://s3-alpha-sig.figma.com/img/bf3b/44d8/bc382142cf1117a3c35bfe8d41af6ba4?Expires=1685318400&Signature=Ttwa3gEN35UXoGuiEDoMmzBeqpwdSWnoVT8vAAfPPUPaICOidFvX5qwud5B~gsZnzx1ZZ0LXTFFieLw4c0y7tzr5LzCBXmrAWMagX7G~edFNvUw~x9NtHqDNkXrI1TunrhK8fu~BAzlNnuZWDRg8L430pqLBAofKrZL1qgo35PsF5GlewsLOOemi393-vxZSor5GnxOVoHTsGItcFeSLuzt78-VaoCG66CdNgd~pYNRrW7b4GdN0Z3Nh7tVzmhWycr4mR~zz2xXRL8jXea4x6nyc29CVbxU9DXXkekmv-6nlFOD5A4uilR7AazaUpibqVU9igLyDRl9EdSPqDX4iYQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        name:"Mercedes Den Z Patners",
        price:"$15.995",
        dis:'16,768+km',
        use:'Used 2022 Manual Oranged Petrol'
    },
    {
        id:10,
        image:'https://s3-alpha-sig.figma.com/img/01dd/f276/b17f3385325c22614ff9511d31b17282?Expires=1685318400&Signature=YtzIENKjl48nYCpC6ju10EmNncLUTn8wZS~1ruZIiwd5YUypWnsLW-XS~0C0lwTxup2rob3-nlxVGfajZPhsXnWl7XiojrDt3xDeGIve6ZU6l2c5EXFY9s5BQ113~WbkJtF7qajI6dkrYfg4vd8YssU5k1CxDo-7pOl5hgnVNmqnYGqEysT4fAzIZwbONeBNmu3NrdZ6ZIiKDxB7eBn4siTtGknK5RZ0mVPSbqdsU1hBfB7oiUiQRUDQlp5HUJh2y6MzNrn5mxV8q45YNDcJfcftsKlEL4h8wtx3hMn7imL8lRVg~nnFWA~BY4lmPXVW32ivsLAfnojbKTZTf7mJ9Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        name:"Acura NSX TYPES",
        price:"$45.546",
        dis:'12,768+km',
        use:'Used 2022 Manual Oranged Petrol'
    }
]

export default Cars