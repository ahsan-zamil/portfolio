import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import kafka from './kafka.png';
import docker from './docker.png';
import kubernetes from './kubernetes.png';
import postman from './postman.png';
import rabbitmq from './rabbitmq.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import microservice_icon from './microservice-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    kafka,
    docker,
    kubernetes,
    postman,
    rabbitmq,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    microservice_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

export const workData = [
    {
        title: 'Job Portal Microservices',
        description: 'A scalable job portal built with Spring Boot microservices, featuring service discovery, API gateway, RabbitMQ, and Dockerized deployment.',
        bgImage: '/work-1.png',
        link: 'https://github.com/ahsan-zamil/job-portal-microservices'
    },
    {
        title: 'Smart Research Assistant',
        description: 'A Chrome extension powered by Gemini AI for real-time content summarization and research note management using a Spring Boot backend.',
        bgImage: '/work-2.png',
        link: 'https://github.com/ahsan-zamil/smart-research-assistant'
    },
    {
        title: 'Fitness AI Microservices',
        description: 'A cloud-native fitness platform offering AI-driven workout recommendations and real-time activity tracking via a microservices architecture.',
        bgImage: '/work-3.png',
        link: 'https://github.com/ahsan-zamil/fitness-app-microservices'
    },
]

export const serviceData = [
    { icon: assets.web_icon, title: 'Backend Development', description: 'Design and develop robust backend systems using Spring Boot, REST APIs, Hibernate, and PostgreSQL/MongoDB.', link: '' },
    { icon: assets.microservice_icon, title: 'Microservices Architecture', description: 'Build scalable, fault-tolerant microservices with Spring Cloud, Eureka, API Gateway, Config Server, and Feign Clients.', link: '' },
    { icon: assets.rabbitmq, title: 'Messaging & Event-Driven Systems', description: 'Implement asynchronous communication using RabbitMQ and Kafka for high-performance distributed applications.', link: '' },
    { icon: assets.docker, title: 'DevOps & Deployment', description: 'Containerize services using Docker, manage deployments with Kubernetes, and monitor performance with Prometheus and Zipkin.', link: '' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'Java, HTML, CSS, SQL' },
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Backend Skills', description: 'PostgreSQL, MongoDB, Redis, Spring Boot, Spring Cloud, Feign Client, Resilience4j' },
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'DevOps Skills', description: 'Git, Gitlab, Docker, Kubernetes, Zipkin' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'Bachelor in Computer Application' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' }
];

export const toolsData = [
    assets.vscode, assets.git, assets.mongodb, assets.kafka, 
    assets.docker, assets.kubernetes, assets.postman, assets.rabbitmq // Development tools
];