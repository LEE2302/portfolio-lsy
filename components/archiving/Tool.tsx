import { FaGithub } from 'react-icons/fa';
import { SiVelog } from 'react-icons/si';
import { FaRegFilePdf } from 'react-icons/fa6';
import Link from 'next/link';
import React from 'react';

function Tool() {
  const iconArr = [
    {
      icon: <FaGithub size="50" />,
      name: 'GitHub',
      value: [
        '코드 저장소 입니다.',
        '알고리즘과 각종 프로젝트를 진행한 코드가 있습니다.',
        '강의를 보며 공부한 코드를 올립니다.',
      ],
      urlPath: 'https://github.com/LEE2302',
      path: 'github.com/LEE2302',
    },
    {
      icon: <SiVelog size="50" color="#20C997" />,
      name: 'VELOG',
      value: [
        '부트캠프와 개인 강의를 통하여 배운 새로운 내용을 기록합니다.',
        '팀 프로젝트를 통해 얻은 느낀점과 배운 내용을 회고록을 통해 기록합니다.',
        '기억하고 싶은 내용들을 기록합니다.',
      ],
      urlPath: 'https://velog.io/@lee2302',
      path: 'velog.io/@lee2302',
    },
    {
      icon: <FaRegFilePdf size="50" />,
      name: '이력서.pdf',
      value: ['제가 개발자가 되기 위해 걸어온 이력을 기록해둔 pdf파일입니다.'],
      urlPath: '',
      path: '이력서.pdf',
    },
  ];

  return (
    <div className="w-full h-4.5/6 flex justify-between ">
      {iconArr.map(el => (
        <Link key={el.name} href={el.path} target="_blank" className="cursor-pointer bg-white w-1/3 m-5 p-5 rounded-lg">
          <div className="">
            <div className="flex items-center gap-3 mb-5">
              <div>{el.icon}</div>
              <span className="text-4xl">{el.name}</span>
            </div>
            <div className="text-xl" id="url-path">
              {el.path}
            </div>
            <ul className="mt-5 pl-5">
              {el.value.map(el => (
                <li key={el} className="text-xl mb-5 list-disc">
                  {el}
                </li>
              ))}
            </ul>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Tool;
