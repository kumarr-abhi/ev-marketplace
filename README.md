README

# Electric Vehicle Marketplace

This Next.js application showcases electric vehicles for sale, providing a responsive and user-friendly interface for browsing and exploring electric vehicle options.

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`

## Project Structure

- `app/`: Next.js app router files, data, hooks and utility functions
- `components/`: Reusable React components
- `lib/`: data fetching
- `public/`: Static assets

## Key Features and Decisions

- **Next.js Framework**: Utilized for server-side rendering, improved SEO, and efficient routing.
- **Image Zoom Functionality**: Implemented for enhanced user experience when viewing vehicle details.
- **Reusable Components**: Extracted common elements for better maintainability and code organization.
- **Tailwind CSS**: Employed for responsive design and rapid development of UI components.
- **Performance Optimization**: Implemented code splitting and lazy loading for faster initial page loads.
- **Accessibility**: Basic ARIA labels and keyboard navigation implemented for improved accessibility.

## Testing

Run tests with: `npm test`

My testing approach includes:

- Unit tests for individual components
- Jest as the testing framework

To run the project:

1. Follow the "Getting Started" instructions above
2. Access the application at `http://localhost:3000`

To run tests:

1. Ensure all dependencies are installed
2. Run `npm test` in the project root directory

## Docker Deployment

To run this project using Docker, follow these steps:

1. Ensure Docker is installed and running on your system.

2. Open a terminal and navigate to the project's root directory.

3. Build the Docker image:

   ```
   docker build -t nextjs-app .
   ```

4. Run the Docker container:

   ```
   docker run --rm -p 3000:3000 --name nextjs-container nextjs-app
   ```

5. Access the application by opening a web browser and navigating to:

   ```
   http://localhost:3000
   ```

6. To stop the container, press Ctrl+C in the terminal or run:
   ```
   docker stop nextjs-container
   ```

Alternatively, if using Docker Compose:

1. Ensure you have a `docker-compose.yml` file in your project root.

2. Build and start the containers:

   ```
   docker-compose up --build
   ```

3. Access the application at `http://localhost:3000`.

4. To stop and remove the containers, use:
   ```
   docker-compose down
   ```

Remember to rebuild the image if you make changes to your application code.
