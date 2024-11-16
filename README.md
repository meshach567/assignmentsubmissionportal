# Assignment Submission Portal

## Overview

The **Assignment Submission Portal** is a backend system built with Node.js, Express, and MongoDB. The system supports two types of users: **Users** and **Admins**.

- **Users** can register, log in, and upload assignments.
- **Admins** can register, log in, view assignments tagged to them, and accept or reject these assignments.

## Features

- User and Admin registration and authentication.
- Role-based access control (User vs. Admin).
- Assignment submission by users.
- Admin approval or rejection of assignments.
- JSON Web Token (JWT) for secure authentication.
- MongoDB for data storage.

## Technologies Used

- **Node.js**
- **Express**
- **MongoDB & Mongoose**
- **JWT (JSON Web Tokens)**
- **dotenv** for environment variables

## Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14 or above)
- [MongoDB](https://www.mongodb.com/)

## Getting Started

### 1. Clone the Repository

To download the project to your laptop, run:

```bash
git clone https://github.com/meshach567/assignmentsubmissionportal.git
cd assignment-submission-portal
