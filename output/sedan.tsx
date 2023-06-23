import React from "react";

interface IIcons {
  fill?: string;
  width?: string;
  height?: string;
}

const Sedan = ({ fill, width, height }: IIcons) => {
  return (
    <div>
      <svg
        width="100"
        height="32"
        viewBox="0 0 128 128"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M118.787 74.3877L117.817 75.2087C115.352 77.2941 112.228 78.4385 109 78.4385H15.0813C13.0458 78.4385 11.029 78.0501 9.13905 77.2941L8.21655 76.9251C7.47772 76.6296 6.98246 75.9228 6.9672 75.1272C6.95824 74.6595 7.32022 74.3946 7.31837 73.955C7.31273 72.6111 7.20868 71.7062 7.27681 70.5301C7.29989 70.1318 7.09258 69.2323 7.12496 68.8422C7.19394 68.011 7.28452 67.1921 7.39874 66.3586C7.89361 62.7474 10.8427 60.0162 14.4391 59.4237C20.0056 58.5066 24.5054 57.8925 30.0239 57.3848C33.5872 57.0571 36.9959 55.7418 39.7901 53.5064C46.7229 47.9601 54.8924 45.5858 64.0758 45.1776L75.6775 44.9385C80.967 44.9385 88.5301 46.1652 93.2896 48.4728C99.3148 51.3941 105.957 53.0577 112.649 53.2884L115.386 53.3828C116.327 53.4153 117.119 54.1008 117.285 55.0283L120.104 70.7301C120.349 72.0969 119.847 73.4908 118.787 74.3877Z"
          fill="#998C46"
        />
        <g style={{ mixBlendMode: "overlay" }} opacity="0.2">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M90.2878 53.3679L90.3444 53.4281C91.9435 55.1271 93 56.3617 93.6094 57.4214C94.2243 58.4906 94.3882 59.3885 94.2003 60.4064C93.9682 61.6635 92.8398 62.4595 91.7474 62.9726C88.3263 64.5795 85.3014 68.1143 85.0569 74.7367C85.0121 75.9489 84.0548 76.9793 82.8246 76.9793H44.3844C42.9047 76.9793 41.6233 75.9503 41.3141 74.5022C40.8905 72.518 40.3971 70.149 39.9943 68.088C39.5923 66.0313 39.2783 64.2704 39.2167 63.5093C39.0658 61.648 39.6127 58.7711 39.9023 57.5711L39.9284 57.4629L68.2508 55.8444C69.0951 55.7592 70.0556 55.6635 71.0934 55.56C77.655 54.9059 87.3062 53.9439 90.2067 53.3836L90.2878 53.3679ZM68.069 56.1553L40.1682 57.7497C39.8744 59.0027 39.3733 61.7279 39.5157 63.4851C39.5757 64.2255 39.8855 65.9676 40.2887 68.0305C40.6911 70.0891 41.1841 72.4562 41.6075 74.4396C41.8869 75.7482 43.0452 76.6793 44.3844 76.6793H68.4754C68.2039 72.1543 67.6786 62.8306 67.6786 60.5207C67.6786 58.4147 67.9135 56.8509 68.069 56.1553ZM68.776 76.6793H82.8246C83.8766 76.6793 84.7177 75.7939 84.7571 74.7256C85.0054 67.9998 88.0894 64.3593 91.6199 62.701C92.6995 62.194 93.7017 61.4545 93.9053 60.3519C94.0786 59.4131 93.9337 58.5869 93.3494 57.571C92.7666 56.5578 91.751 55.363 90.1823 53.6936C87.172 54.2589 77.6171 55.2113 71.1191 55.8589C70.1236 55.9582 69.1997 56.0503 68.3822 56.1327C68.2351 56.7439 67.9786 58.331 67.9786 60.5207C67.9786 62.8223 68.5044 72.1557 68.776 76.6793Z"
            fill="black"
          />
        </g>
        <g style={{ mixBlendMode: "multiply" }}>
          <path
            d="M118.787 74.3877L117.817 75.2087C115.352 77.2941 112.228 78.4385 109 78.4385H15.0812C13.0457 78.4385 11.0289 78.0501 9.13898 77.2941L8.21649 76.9251C7.47766 76.6296 6.9824 75.9228 6.96714 75.1272C6.95817 74.6595 7.32016 74.3946 7.31831 73.955C7.31267 72.6111 7.20862 71.7062 7.27675 70.5301C7.29982 70.1318 7.09252 69.2323 7.1249 68.8422C7.19388 68.011 7.28446 67.1921 7.39868 66.3586C7.89355 62.7474 10.8426 60.0162 14.439 59.4237C20.0056 58.5066 24.5054 57.8925 30.0239 57.3848C33.5872 57.0571 36.9958 55.7418 39.79 53.5064C46.7229 47.9601 54.8923 45.5858 64.0757 45.1776L75.6775 44.9385C80.9669 44.9385 88.53 46.1652 93.2895 48.4728C99.3147 51.3941 105.957 53.0577 112.649 53.2884L115.386 53.3828C116.327 53.4153 117.119 54.1008 117.285 55.0283L120.104 70.7301C120.349 72.0969 119.847 73.4908 118.787 74.3877Z"
            fill="url(#paint0_radial_108_4168)"
          />
        </g>
        <g style={{ mixBlendMode: "overlay" }}>
          <path
            d="M118.787 74.3877L117.817 75.2087C115.352 77.2941 112.228 78.4385 109 78.4385H15.0812C13.0457 78.4385 11.0289 78.0501 9.13898 77.2941L8.21649 76.9251C7.47766 76.6296 6.9824 75.9228 6.96714 75.1272C6.95817 74.6595 7.32016 74.3946 7.31831 73.955C7.31267 72.6111 7.20862 71.7062 7.27675 70.5301C7.29982 70.1318 7.09252 69.2323 7.1249 68.8422C7.19388 68.011 7.28446 67.1921 7.39868 66.3586C7.89355 62.7474 10.8426 60.0162 14.439 59.4237C20.0056 58.5066 24.5054 57.8925 30.0239 57.3848C33.5872 57.0571 36.9958 55.7418 39.79 53.5064C46.7229 47.9601 54.8923 45.5858 64.0757 45.1776L75.6775 44.9385C80.9669 44.9385 88.53 46.1652 93.2895 48.4728C99.3147 51.3941 105.957 53.0577 112.649 53.2884L115.386 53.3828C116.327 53.4153 117.119 54.1008 117.285 55.0283L120.104 70.7301C120.349 72.0969 119.847 73.4908 118.787 74.3877Z"
            fill="url(#paint1_linear_108_4168)"
          />
        </g>
        <path
          d="M114.06 58.5113C111.973 57.3315 110.424 55.8642 110.424 55.5239C110.424 54.9113 116.125 55.3349 117.441 56.0609C118.757 56.787 118.258 60.1904 118.054 60.1904C117.849 60.1904 116.148 59.6912 114.06 58.5113Z"
          fill="url(#paint2_linear_108_4168)"
        />
        <path
          d="M15.2775 60.0913C14.8754 59.9381 12.0759 59.9528 10.508 60.9533C8.49675 62.2366 7.84564 64.5926 8.30534 64.8033C8.76504 65.014 10.1841 64.7247 12.3676 63.3073C14.5512 61.8899 15.6797 60.2446 15.2775 60.0913Z"
          fill="url(#paint3_linear_108_4168)"
        />
        <g filter="url(#filter0_i_108_4168)">
          <path
            d="M8.30273 72.7175L8.30282 70.9519C8.30284 70.5198 8.58034 70.1366 8.99085 70.0018L10.5682 69.4839C11.132 69.2988 11.732 69.6425 11.8575 70.2225L12.3671 72.5777C12.5049 73.2145 12.0066 73.8109 11.3554 73.7885L9.26847 73.717C8.72982 73.6985 8.30271 73.2565 8.30273 72.7175Z"
            fill="url(#paint4_linear_108_4168)"
          />
        </g>
        <g filter="url(#filter1_i_108_4168)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.05163 70.8473L9.05155 72.5546C9.05152 73.0758 9.46452 73.5032 9.98536 73.5211L11.9893 73.5898C11.815 73.7208 11.5956 73.7968 11.3554 73.7885L9.26847 73.717C8.72982 73.6985 8.30271 73.2565 8.30273 72.7175L8.30282 70.9519C8.30284 70.5198 8.58034 70.1366 8.99085 70.0018L10.5682 69.4839C10.7574 69.4218 10.9506 69.4192 11.1287 69.4651L9.71691 69.9287C9.31998 70.059 9.05165 70.4296 9.05163 70.8473Z"
            fill="url(#paint5_linear_108_4168)"
          />
        </g>
        <path
          d="M40.8841 54.8384L39.1228 56.1111C38.3366 56.6792 38.7365 57.9018 39.7064 57.8815C44.4675 57.7816 53.1966 57.4751 65.0804 56.7395C77.9416 55.9433 89.6857 54.1461 96.0266 52.9645C96.9704 52.7886 97.109 51.5261 96.233 51.133C88.7273 47.765 80.5817 45.9411 72.3655 46.3574L62.8745 46.8383C54.9704 47.2388 47.299 50.2032 40.8841 54.8384Z"
          fill="url(#paint6_linear_108_4168)"
        />
        <path
          d="M66.5918 55.7116L66.936 47.6699C64.1145 47.8442 58.6368 48.283 54.9375 49.2454C51.2382 50.2078 46.2407 52.679 44.7495 53.7191L45.0126 56.877L66.5918 55.7116Z"
          fill="url(#paint7_linear_108_4168)"
        />
        <path
          d="M69.7217 55.4865L69.2817 47.6489C75.4753 47.1526 79.5881 47.3488 88.2357 49.3284L90.0352 53.1672C82.0795 54.2641 77.6344 54.7428 69.7217 55.4865Z"
          fill="url(#paint8_linear_108_4168)"
        />
        <path
          d="M11.4573 63.1412C12.625 62.8512 13.5228 61.8788 13.7722 61.0141C13.9651 60.3452 12.3447 60.5729 11.7532 60.7597C11.1617 60.9464 10.5613 61.4668 10.5613 62.0359C10.5613 62.8764 11.1046 63.2287 11.4573 63.1412Z"
          fill="#D9D9D9"
        />
        <g filter="url(#filter2_i_108_4168)">
          <path
            d="M15.3597 73.9169V78.4389H38.6406V73.9169C38.6406 67.6216 33.429 62.5183 27.0001 62.5183C20.5713 62.5183 15.3597 67.6216 15.3597 73.9169Z"
            fill="#998C46"
          />
        </g>
        <g style={{ mixBlendMode: "multiply" }}>
          <path
            d="M15.3597 73.9169V78.4389H38.6406V73.9169C38.6406 67.6216 33.429 62.5183 27.0001 62.5183C20.5713 62.5183 15.3597 67.6216 15.3597 73.9169Z"
            fill="url(#paint9_radial_108_4168)"
          />
        </g>
        <g filter="url(#filter3_i_108_4168)">
          <path
            d="M17.0001 74.4625V78.439H37.0001V74.4625C37.0001 68.9266 32.5229 64.439 27.0001 64.439C21.4772 64.439 17.0001 68.9266 17.0001 74.4625Z"
            fill="url(#paint10_linear_108_4168)"
          />
        </g>
        <circle
          cx="27.0001"
          cy="74.8726"
          r="9.18213"
          fill="url(#paint11_radial_108_4168)"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M26.9999 80.5122C30.1147 80.5122 32.6397 77.9872 32.6397 74.8725C32.6397 71.7577 30.1147 69.2327 26.9999 69.2327C23.8851 69.2327 21.3601 71.7577 21.3601 74.8725C21.3601 77.9872 23.8851 80.5122 26.9999 80.5122ZM26.9999 72.8406C27.5708 72.8406 28.071 72.1533 28.3486 71.1233C27.9274 70.9718 27.4732 70.8892 26.9998 70.8892C26.5265 70.8892 26.0724 70.9717 25.6512 71.1233C25.9288 72.1532 26.429 72.8406 26.9999 72.8406ZM28.7594 73.8565C28.4741 73.3622 28.8189 72.5857 29.5716 71.8306C30.2643 72.4168 30.754 73.2354 30.9206 74.166C29.89 74.4404 29.0448 74.3509 28.7594 73.8565ZM28.7594 75.8884C29.0448 75.394 29.89 75.3045 30.9206 75.5789C30.754 76.5095 30.2642 77.3281 29.5715 77.9143C28.8189 77.1591 28.4741 76.3826 28.7594 75.8884ZM26.9999 76.9042C27.5708 76.9042 28.071 77.5915 28.3486 78.6215C27.9274 78.773 27.4732 78.8556 26.9998 78.8556C26.5265 78.8556 26.0724 78.7731 25.6512 78.6215C25.9288 77.5915 26.429 76.9042 26.9999 76.9042ZM25.2402 75.8884C25.5255 76.3826 25.1807 77.1591 24.4281 77.9143C23.7354 77.328 23.2456 76.5095 23.0791 75.5789C24.1096 75.3045 24.9548 75.394 25.2402 75.8884ZM25.2402 73.8565C24.9547 74.3508 24.1096 74.4404 23.079 74.1659C23.2456 73.2353 23.7354 72.4168 24.428 71.8306C25.1807 72.5857 25.5255 73.3622 25.2402 73.8565Z"
          fill="url(#paint12_linear_108_4168)"
        />
        <g filter="url(#filter4_i_108_4168)">
          <path
            d="M86.4766 73.9169V78.4389H109.757V73.9169C109.757 67.6216 104.546 62.5183 98.117 62.5183C91.6882 62.5183 86.4766 67.6216 86.4766 73.9169Z"
            fill="#998C46"
          />
        </g>
        <g style={{ mixBlendMode: "multiply" }}>
          <path
            d="M86.4766 73.9169V78.4389H109.757V73.9169C109.757 67.6216 104.546 62.5183 98.117 62.5183C91.6882 62.5183 86.4766 67.6216 86.4766 73.9169Z"
            fill="url(#paint13_radial_108_4168)"
          />
        </g>
        <g filter="url(#filter5_i_108_4168)">
          <path
            d="M88.1169 74.4625V78.439H108.117V74.4625C108.117 68.9266 103.64 64.439 98.1169 64.439C92.594 64.439 88.1169 68.9266 88.1169 74.4625Z"
            fill="url(#paint14_linear_108_4168)"
          />
        </g>
        <circle
          cx="98.1168"
          cy="74.8726"
          r="9.18213"
          fill="url(#paint15_radial_108_4168)"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M98.1167 80.5122C101.231 80.5122 103.757 77.9872 103.757 74.8725C103.757 71.7577 101.231 69.2327 98.1167 69.2327C95.0019 69.2327 92.4769 71.7577 92.4769 74.8725C92.4769 77.9872 95.0019 80.5122 98.1167 80.5122ZM98.1167 72.8406C98.6876 72.8406 99.1878 72.1533 99.4654 71.1233C99.0442 70.9718 98.5901 70.8892 98.1166 70.8892C97.6433 70.8892 97.1892 70.9717 96.7681 71.1233C97.0457 72.1532 97.5458 72.8406 98.1167 72.8406ZM99.8762 73.8565C99.5909 73.3622 99.9357 72.5857 100.688 71.8306C101.381 72.4168 101.871 73.2354 102.037 74.166C101.007 74.4404 100.162 74.3509 99.8762 73.8565ZM99.8762 75.8884C100.162 75.394 101.007 75.3045 102.037 75.5789C101.871 76.5095 101.381 77.3281 100.688 77.9143C99.9357 77.1591 99.5909 76.3826 99.8762 75.8884ZM98.1167 76.9042C98.6877 76.9042 99.1878 77.5915 99.4654 78.6215C99.0442 78.773 98.5901 78.8556 98.1166 78.8556C97.6433 78.8556 97.1892 78.7731 96.768 78.6215C97.0456 77.5915 97.5458 76.9042 98.1167 76.9042ZM96.357 75.8884C96.6423 76.3826 96.2975 77.1591 95.5449 77.9143C94.8522 77.328 94.3625 76.5095 94.1959 75.5789C95.2265 75.3045 96.0716 75.394 96.357 75.8884ZM96.357 73.8565C96.0716 74.3508 95.2264 74.4404 94.1959 74.1659C94.3624 73.2353 94.8522 72.4168 95.5449 71.8306C96.2975 72.5857 96.6423 73.3622 96.357 73.8565Z"
          fill="url(#paint16_linear_108_4168)"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M84.5262 53.8995C83.1272 54.0769 81.8056 54.2367 80.4956 54.3873C81.1742 51.8616 81.9096 49.3137 82.1321 49.1654C82.5524 48.8852 84.5838 48.9202 84.8991 49.4456C85.0595 49.7129 84.8223 51.7981 84.5262 53.8995Z"
          fill="url(#paint17_linear_108_4168)"
        />
        <path
          d="M42.6291 54.7353C42.3545 55.2804 42.254 56.5768 42.6292 56.9098C43.0401 57.2746 43.9069 57.2415 44.8764 56.9998C45.4238 56.8633 45.2773 53.409 44.708 53.5182C43.5874 53.7331 42.8496 54.2976 42.6291 54.7353Z"
          fill="#998C46"
        />
        <path
          d="M42.6291 54.7353C42.3545 55.2804 42.254 56.5768 42.6292 56.9098C43.0401 57.2746 43.9069 57.2415 44.8764 56.9998C45.4238 56.8633 45.2773 53.409 44.708 53.5182C43.5874 53.7331 42.8496 54.2976 42.6291 54.7353Z"
          fill="url(#paint18_linear_108_4168)"
        />
        <g
          style={{ mixBlendMode: "multiply" }}
          opacity="0.23"
          filter="url(#filter6_f_108_4168)"
        >
          <path
            d="M61.2786 62.1245C60.7999 62.1245 60.6597 61.309 61.1419 61.1159C61.9045 60.8104 63.4843 60.6832 66.1387 60.6192C66.5396 60.6096 66.7861 61.2505 66.4244 61.4236C65.262 61.9799 62.3044 62.1245 61.2786 62.1245Z"
            fill="black"
          />
        </g>
        <path
          d="M61.1148 61.6885C60.6361 61.6885 60.4958 60.873 60.978 60.6798C61.7407 60.3743 63.3205 60.2472 65.9748 60.1832C66.3758 60.1736 66.6223 60.8145 66.2605 60.9876C65.0982 61.5438 62.1405 61.6885 61.1148 61.6885Z"
          fill="#998C46"
        />
        <g style={{ mixBlendMode: "multiply" }} opacity="0.5">
          <path
            d="M61.1148 61.6885C60.6361 61.6885 60.4958 60.873 60.978 60.6798C61.7407 60.3743 63.3205 60.2472 65.9748 60.1832C66.3758 60.1736 66.6223 60.8145 66.2605 60.9876C65.0982 61.5438 62.1405 61.6885 61.1148 61.6885Z"
            fill="url(#paint19_linear_108_4168)"
          />
        </g>
        <g
          style={{ mixBlendMode: "multiply" }}
          opacity="0.23"
          filter="url(#filter7_f_108_4168)"
        >
          <path
            d="M84.8113 59.5186C84.3355 59.5716 84.1058 58.7767 84.5636 58.5313C85.2878 58.1432 86.8438 57.8419 89.4747 57.4843C89.8721 57.4303 90.1881 58.04 89.8477 58.2521C88.7541 58.9336 85.8307 59.405 84.8113 59.5186Z"
            fill="black"
          />
        </g>
        <path
          d="M84.6001 59.1036C84.1244 59.1566 83.8947 58.3616 84.3525 58.1163C85.0767 57.7282 86.6326 57.4268 89.2636 57.0693C89.6609 57.0153 89.9769 57.625 89.6366 57.8371C88.543 58.5186 85.6196 58.99 84.6001 59.1036Z"
          fill="#998C46"
        />
        <g style={{ mixBlendMode: "multiply" }} opacity="0.5">
          <path
            d="M84.6001 59.1036C84.1244 59.1566 83.8947 58.3616 84.3525 58.1163C85.0767 57.7282 86.6326 57.4268 89.2636 57.0693C89.6609 57.0153 89.9769 57.625 89.6366 57.8371C88.543 58.5186 85.6196 58.99 84.6001 59.1036Z"
            fill="url(#paint20_linear_108_4168)"
          />
        </g>
        <path
          d="M10.463 63.3807C10.463 63.9501 10.1066 64.3407 9.65029 64.3407C9.19397 64.3407 8.84198 64.0156 8.84198 63.4462C8.84198 62.8768 9.40586 62.3789 9.86217 62.3789C10.3185 62.3789 10.463 62.8113 10.463 63.3807Z"
          fill="#D9D9D9"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M65.3648 55.7778C65.7457 53.1922 66.1059 50.2985 65.906 49.9654C65.5585 49.3863 63.3191 49.3477 62.8557 49.6566C62.5927 49.8319 61.6787 53.0516 60.8896 56.0195L65.3648 55.7778Z"
          fill="url(#paint21_linear_108_4168)"
        />
        <defs>
          <filter
            id="filter0_i_108_4168"
            x="8.30273"
            y="69.4336"
            width="4.0874"
            height="5.03953"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="0.68406" />
            <feGaussianBlur stdDeviation="1.36812" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_108_4168"
            />
          </filter>
          <filter
            id="filter1_i_108_4168"
            x="8.30273"
            y="69.4336"
            width="3.68652"
            height="5.35547"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_108_4168"
            />
          </filter>
          <filter
            id="filter2_i_108_4168"
            x="15.3597"
            y="62.5183"
            width="23.2809"
            height="16.6047"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="0.68406" />
            <feGaussianBlur stdDeviation="1.36812" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_108_4168"
            />
          </filter>
          <filter
            id="filter3_i_108_4168"
            x="17.0001"
            y="64.439"
            width="20"
            height="14.6841"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="0.68406" />
            <feGaussianBlur stdDeviation="1.36812" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_108_4168"
            />
          </filter>
          <filter
            id="filter4_i_108_4168"
            x="86.4766"
            y="62.5183"
            width="23.2809"
            height="16.6047"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="0.68406" />
            <feGaussianBlur stdDeviation="1.36812" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_108_4168"
            />
          </filter>
          <filter
            id="filter5_i_108_4168"
            x="88.1169"
            y="64.439"
            width="20"
            height="14.6841"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="0.68406" />
            <feGaussianBlur stdDeviation="1.36812" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_108_4168"
            />
          </filter>
          <filter
            id="filter6_f_108_4168"
            x="59.8425"
            y="59.6191"
            width="7.75769"
            height="3.50537"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="0.5"
              result="effect1_foregroundBlur_108_4168"
            />
          </filter>
          <filter
            id="filter7_f_108_4168"
            x="83.3153"
            y="56.481"
            width="7.677"
            height="4.04028"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="0.5"
              result="effect1_foregroundBlur_108_4168"
            />
          </filter>
          <radialGradient
            id="paint0_radial_108_4168"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(62.3928 51.4443) rotate(87.7898) scale(30.4147 98.6084)"
          >
            <stop offset="0.583333" stop-color="white" />
            <stop offset="1" stop-opacity="0.35" />
          </radialGradient>
          <linearGradient
            id="paint1_linear_108_4168"
            x1="61.7944"
            y1="44.9385"
            x2="63.5575"
            y2="78.4385"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="white" stop-opacity="0.5" />
            <stop offset="0.388795" stop-color="white" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_108_4168"
            x1="114.334"
            y1="54.5212"
            x2="114.066"
            y2="60.1759"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FF3232" />
            <stop offset="1" stop-color="#7C0B0B" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_108_4168"
            x1="12.582"
            y1="59.5219"
            x2="11.7237"
            y2="65.1221"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#242424" />
            <stop offset="1" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_108_4168"
            x1="10.3464"
            y1="70.2589"
            x2="10.3464"
            y2="73.1265"
            gradientUnits="userSpaceOnUse"
          >
            <stop />
            <stop offset="0.776042" stop-color="#1D1D1D" />
            <stop offset="1" stop-color="#262626" />
          </linearGradient>
          <linearGradient
            id="paint5_linear_108_4168"
            x1="10.1431"
            y1="70.0035"
            x2="10.1431"
            y2="73.7892"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#616161" />
            <stop offset="1" stop-color="#303030" />
          </linearGradient>
          <linearGradient
            id="paint6_linear_108_4168"
            x1="68.2329"
            y1="45.9984"
            x2="68.2329"
            y2="57.2093"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#373737" />
            <stop offset="1" />
          </linearGradient>
          <linearGradient
            id="paint7_linear_108_4168"
            x1="54.9078"
            y1="47.8089"
            x2="54.9078"
            y2="56.9139"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.0001" stop-color="#CFFAF7" />
            <stop offset="1" stop-color="#80ABA8" />
          </linearGradient>
          <linearGradient
            id="paint8_linear_108_4168"
            x1="78.7839"
            y1="47.6823"
            x2="78.7839"
            y2="55.5182"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.0001" stop-color="#CFFAF7" />
            <stop offset="1" stop-color="#80ABA8" />
          </linearGradient>
          <radialGradient
            id="paint9_radial_108_4168"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(27.0002 63.3294) rotate(101.471) scale(14.2631 20.0363)"
          >
            <stop offset="0.583333" stop-color="white" />
            <stop offset="1" stop-opacity="0.35" />
          </radialGradient>
          <linearGradient
            id="paint10_linear_108_4168"
            x1="27.0001"
            y1="67.0918"
            x2="27.0001"
            y2="76.3089"
            gradientUnits="userSpaceOnUse"
          >
            <stop />
            <stop offset="0.776042" stop-color="#1D1D1D" />
            <stop offset="1" stop-color="#262626" />
          </linearGradient>
          <radialGradient
            id="paint11_radial_108_4168"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(27.0001 74.8726) rotate(90) scale(9.18213)"
          >
            <stop offset="0.65625" stop-color="#393939" />
            <stop offset="0.786458" stop-color="#3A3A3A" />
            <stop offset="1" stop-color="#1E1E1E" />
          </radialGradient>
          <linearGradient
            id="paint12_linear_108_4168"
            x1="26.7894"
            y1="68.6082"
            x2="26.7018"
            y2="80.5118"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="white" />
            <stop offset="1" stop-color="#ACACAC" />
          </linearGradient>
          <radialGradient
            id="paint13_radial_108_4168"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(93.4458 58.0966) rotate(81.6009) scale(18.0777 25.3947)"
          >
            <stop offset="0.583333" stop-color="white" />
            <stop offset="1" stop-opacity="0.35" />
          </radialGradient>
          <linearGradient
            id="paint14_linear_108_4168"
            x1="98.1169"
            y1="67.0918"
            x2="98.1169"
            y2="76.3089"
            gradientUnits="userSpaceOnUse"
          >
            <stop />
            <stop offset="0.776042" stop-color="#1D1D1D" />
            <stop offset="1" stop-color="#262626" />
          </linearGradient>
          <radialGradient
            id="paint15_radial_108_4168"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(98.1168 74.8726) rotate(90) scale(9.18213)"
          >
            <stop offset="0.65625" stop-color="#393939" />
            <stop offset="0.786458" stop-color="#3A3A3A" />
            <stop offset="1" stop-color="#1E1E1E" />
          </radialGradient>
          <linearGradient
            id="paint16_linear_108_4168"
            x1="97.9062"
            y1="68.6082"
            x2="97.8186"
            y2="80.5118"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="white" />
            <stop offset="1" stop-color="#ACACAC" />
          </linearGradient>
          <linearGradient
            id="paint17_linear_108_4168"
            x1="82.263"
            y1="48.9917"
            x2="82.263"
            y2="57.9216"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.0001" stop-color="#A6DAD6" />
            <stop offset="1" stop-color="#5F918D" />
          </linearGradient>
          <linearGradient
            id="paint18_linear_108_4168"
            x1="43.8016"
            y1="53.5156"
            x2="44"
            y2="57"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#EFEFEF" stop-opacity="0.5" />
            <stop offset="1" stop-color="#232323" stop-opacity="0.1" />
          </linearGradient>
          <linearGradient
            id="paint19_linear_108_4168"
            x1="63.5576"
            y1="60.1831"
            x2="63.8041"
            y2="61.9262"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#DADADA" />
            <stop offset="1" stop-color="#818181" />
          </linearGradient>
          <linearGradient
            id="paint20_linear_108_4168"
            x1="86.8611"
            y1="57.3369"
            x2="87.2992"
            y2="59.042"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#DADADA" />
            <stop offset="1" stop-color="#818181" />
          </linearGradient>
          <linearGradient
            id="paint21_linear_108_4168"
            x1="62.6401"
            y1="49.7806"
            x2="62.6401"
            y2="59.9723"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.0001" stop-color="#A6DAD6" />
            <stop offset="1" stop-color="#5F918D" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Sedan;
