console.log('Hello from walis-sedan!');
console.log('Server starting on port 3000...');

// Basic HTTP server
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Walis Sedan</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          line-height: 1.6;
          color: #333;
          background-color: #f8f9fa;
        }

        .container {
          width: 100%;
          max-width: 100%;
          margin: 0 auto;
          padding: 0 15px;
        }

        /* Mobile first approach - base styles */
        @media (max-width: 767px) {
          .container {
            max-width: 100%;
          }
        }

        /* 768px and above - 720px container */
        @media (min-width: 768px) {
          .container {
            max-width: 720px;
          }
        }

        /* 992px and above - 960px container */
        @media (min-width: 992px) {
          .container {
            max-width: 960px;
          }
        }

        /* 1200px and above - 1170px container */
        @media (min-width: 1200px) {
          .container {
            max-width: 1170px;
          }
        }

        /* 1600px and above - 1390px container */
        @media (min-width: 1600px) {
          .container {
            max-width: 1390px;
          }
        }

        .header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 60px 0;
          text-align: center;
        }

        .header h1 {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .header p {
          font-size: 1.25rem;
          opacity: 0.9;
        }

        .content {
          padding: 80px 0;
        }

        .info-section {
          background: white;
          border-radius: 12px;
          padding: 40px;
          margin: 40px 0;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .info-section h2 {
          color: #2d3748;
          margin-bottom: 20px;
          font-size: 1.875rem;
        }

        .info-section p {
          color: #4a5568;
          font-size: 1.125rem;
          margin-bottom: 15px;
        }

        .breakpoint-info {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin-top: 30px;
        }

        .breakpoint-card {
          background: #f7fafc;
          border: 2px solid #e2e8f0;
          border-radius: 8px;
          padding: 20px;
          text-align: center;
        }

        .breakpoint-card h3 {
          color: #2d3748;
          margin-bottom: 10px;
        }

        .breakpoint-card .resolution {
          color: #667eea;
          font-weight: 600;
          font-size: 0.875rem;
        }

        .breakpoint-card .container-width {
          color: #764ba2;
          font-weight: 700;
          font-size: 1.25rem;
          margin-top: 5px;
        }

        .current-info {
          background: #ebf8ff;
          border: 2px solid #3182ce;
          border-radius: 8px;
          padding: 20px;
          margin: 30px 0;
          text-align: center;
        }

        .current-info h3 {
          color: #2c5282;
          margin-bottom: 10px;
        }

        .current-viewport {
          color: #2c5282;
          font-weight: 700;
          font-size: 1.125rem;
        }
      </style>
    </head>
    <body>
      <header class="header">
        <div class="container">
          <h1>Welcome to Walis Sedan</h1>
          <p>Your responsive application is now running!</p>
        </div>
      </header>

      <main class="content">
        <div class="container">
          <div class="info-section">
            <h2>Responsive Container Design</h2>
            <p>This application implements a responsive container system that adapts to different screen sizes:</p>

            <div class="breakpoint-info">
              <div class="breakpoint-card">
                <h3>Mobile</h3>
                <div class="resolution">< 768px</div>
                <div class="container-width">100% width</div>
              </div>

              <div class="breakpoint-card">
                <h3>Tablet</h3>
                <div class="resolution">≥ 768px</div>
                <div class="container-width">720px</div>
              </div>

              <div class="breakpoint-card">
                <h3>Desktop</h3>
                <div class="resolution">≥ 992px</div>
                <div class="container-width">960px</div>
              </div>

              <div class="breakpoint-card">
                <h3>Large Desktop</h3>
                <div class="resolution">≥ 1200px</div>
                <div class="container-width">1170px</div>
              </div>

              <div class="breakpoint-card">
                <h3>Extra Large</h3>
                <div class="resolution">≥ 1600px</div>
                <div class="container-width">1390px</div>
              </div>
            </div>

            <div class="current-info">
              <h3>Current Viewport Information</h3>
              <div class="current-viewport" id="viewport-info">
                Loading viewport information...
              </div>
            </div>
          </div>
        </div>
      </main>

      <script>
        function updateViewportInfo() {
          const width = window.innerWidth;
          const viewportElement = document.getElementById('viewport-info');

          let containerWidth = '100%';
          let breakpoint = 'Mobile';

          if (width >= 1600) {
            containerWidth = '1390px';
            breakpoint = 'Extra Large';
          } else if (width >= 1200) {
            containerWidth = '1170px';
            breakpoint = 'Large Desktop';
          } else if (width >= 992) {
            containerWidth = '960px';
            breakpoint = 'Desktop';
          } else if (width >= 768) {
            containerWidth = '720px';
            breakpoint = 'Tablet';
          }

          viewportElement.innerHTML = \`
            Viewport: \${width}px | Breakpoint: \${breakpoint} | Container: \${containerWidth}
          \`;
        }

        updateViewportInfo();
        window.addEventListener('resize', updateViewportInfo);
      </script>
    </body>
    </html>
  `);
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
