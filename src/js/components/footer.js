const createMarkupFooter = () => {
  const markup = (
    `<nav class="container">
      <a href="films.html" class="footer__links">
        <svg class="icon-films" fill="#ffffff" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
          <path d="M22 1v2h-2V1h-2v4H6V1H4v2H2V1H0v22h2v-2h2v2h2v-4h12v4h2v-2h2v2h2V1h-2zM4 19H2v-2h2v2zm0-4H2v-2h2v2zm0-4H2V9h2v2zm0-4H2V5h2v2zm14 9H6V8h12v8zm4 3h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2z"/>
        </svg>
      </a>

      <a href="peoples.html" class="footer__links">
        <svg class="icon-people" fill="#ffffff" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
          <path d="M10.644 17.08c2.866-.662 4.539-1.241 3.246-3.682C9.958 5.971 12.848 2 17.001 2c4.235 0 7.054 4.124 3.11 11.398-1.332 2.455.437 3.034 3.242 3.682 2.483.574 2.647 1.787 2.647 3.889V22H8c0-2.745-.22-4.258 2.644-4.92zM-2 22h7.809c-.035-8.177 3.436-5.313 3.436-11.127C9.245 8.362 7.606 7 5.497 7 2.382 7 .215 9.979 3.164 15.549c.969 1.83-1.031 2.265-3.181 2.761C-1.879 18.74-2 19.65-2 21.227V22z"/>
        </svg>
      </a>

      <a href="" class="footer__links">
        <svg class="icon-location" fill="#ffffff" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
          <path d="M12 0C8.852 0 6 2.553 6 5.702c0 4.682 4.783 5.177 6 12.298 1.217-7.121 6-7.616 6-12.298C18 2.553 15.149 0 12 0zm0 8a2 2 0 11-.001-3.999A2 2 0 0112 8zm12 16l-6.707-2.427L12 24l-5.581-2.427L0 24l4-9 3.96-1.584c.38.516.741 1.08 1.061 1.729l-3.523 1.41-1.725 3.88 2.672-1.01 1.506-2.687-.635 3.044 4.189 1.789L12 19.55l.465 2.024 4.15-1.89-.618-3.033 1.572 2.896 2.732.989-1.739-3.978-3.581-1.415c.319-.65.681-1.215 1.062-1.731L20.064 15 24 24z"/>
        </svg>
      </a>

      <a href="" class="footer__links">
        <svg class="icon-species" fill="#ffffff" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 512 512">
          <path d="M510.486 353.807c-30.479 1.847-105.449 76.373-105.449 76.373-29.146 29.144-53.773 7.797-53.773 7.797-22.167-12.314-50.49-2.463-50.49-2.463-16.01 4.926-34.072 4.926-34.072 4.926-108.37-8.209-107.138-117.809-107.138-117.809 0-113.603 120.48-117.605 120.48-117.605 71.116 0 68.961 76.967 68.961 76.967-3.386 83.124-82.303 82.096-82.303 82.096-49.466 0-45.976-48.642-45.976-48.642 3.695-55.828 47.414-55.825 47.414-55.825 27.297 0 27.604 15.083 27.604 15.083 0 10.361-20.215 20.218-20.215 20.218-15.394 6.773-13.546 22.167-13.546 22.167 2.463 19.292 16.009 28.568 16.009 28.568 6.708 3.271 4.103-4.144 4.103-4.144-10.879-26.065 12.11-28.735 12.11-28.735 7.184-1.027 20.115-8.209 20.115-8.209 15.598-13.75 12.315-34.48 12.315-34.48-8.003-44.127-56.648-41.05-56.648-41.05-89.897 8.62-85.793 90.717-85.793 90.717 5.94 87.833 77.993 87.025 77.993 87.025 36.121 0 54.596-4.926 54.596-4.926 36.124-8.209 43.101 18.472 43.101 18.472 11.083 16.831 17.65 3.694 17.65 3.694 10.26-16.009 43.1-81.687 43.1-81.687 11.288-22.374 30.787-19.704 30.787-19.704 21.755 0 6.569-33.66 6.569-33.66-13.135-25.862-41.254-97.287-41.254-97.287-7.184-21.346 11.903-30.786 11.903-30.786 11.083-9.03-4.719-18.06-4.719-18.06-34.48-20.524-107.137-20.936-107.137-20.936-221.936 0-224.95 199.089-224.95 199.089 0 163.373 140.799 172.814 140.799 172.814 38.791 3.694 64.344-13.546 64.344-13.546 17.548-12.007 38.483-2.156 38.483-2.156 14.162 7.081 30.787 7.081 30.787 7.081 32.326 0 82.2-78.198 82.2-78.198 22.166-29.863 62.189-51.024 62.189-51.024 3.156-1.885-.149-2.155-.149-2.155zM382.51 160.275C371.867 166.46 356.73 178 356.73 178c-11.414 8.8-21.877 6.184-21.877 6.184-28.604-6.335-22.728-26.088-21.575-29.276 15.841-10.299 55.995-4.232 69.232 5.368zm-22.972 211.927s-9.417-8.853-.845-18.97c0 0 8.24-9.503 16.217-10.318.521 5.281 1.138 22.438-10.237 35.165-1.793-2.206-3.676-4.418-5.135-5.877zm35.852-91.236c-21.96-9.852-14.571-31.4-14.571-31.4 2.066-5.967 4.727-9.439 7.48-11.357 23.155 6.426 30.096 41.443 31.195 47.964-10.44-1.81-12.79-1.327-24.104-5.207zM133.023 472.088c0 3.67-5.337-.666-5.337-.666-15.011-8.84-25.688-7.673-25.688-7.673-21.35 0-44.032 30.356-44.032 30.356-8.257 8.257-2.17-2.17-2.17-2.17 17.347-29.75 31.857-85.564 31.857-85.564.999-6.673 4.337-4.337 4.337-4.337 18.515 15.18 41.033 70.054 41.033 70.054zM6.425 355.166c-13.178 0-2.001-3.336-2.001-3.336 58.545-19.181 69.385-46.868 69.385-46.868 5.005-6.838 6.172 0 6.172 0 5.671 17.015 5.005 74.057 5.005 74.057-.835 6.67-7.34-.667-7.34-.667-21.183-25.021-71.221-23.186-71.221-23.186zm7.504-143.776c62.216 23.184 89.236-2.667 89.236-2.667 8.338-4.837 6.506 1.835 6.506 1.835-3.67 24.184-28.358 69.385-28.358 69.385-4.252 4.255-6.337-2.501-6.337-2.501-17.344-33.387-61.047-62.882-61.047-62.882-7.17-5.505 0-3.17 0-3.17zm86.9-126.263c-2.667-8.842.835-2.834.835-2.834 34.026 69.557 67.552 57.042 67.552 57.042 7.507-.666 4.337 2.67 4.337 2.67-7.839 16.177-53.042 50.707-53.042 50.707-6.003 2.835-3.336-6.506-3.336-6.506 4.17-33.527-16.346-101.08-16.346-101.08zm87.235 39.366c20.528-15.278 49.624-101.33 49.624-101.33 5.924-16.093 4.252-4.251 4.252-4.251-10.008 73.392 17.18 85.23 17.18 85.23 7.507 3.336 1.501 6.338 1.501 6.338-22.349 12.01-72.557 19.015-72.557 19.015-6.155 0 0-5.002 0-5.002z"/>
        </svg>
      </a>

      <a href="" class="footer__links">
        <svg class="icon-vehicles" fill="#ffffff" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
          <path d="M21.739 10.921A51.347 51.347 0 0018.187 10s-2.379-2.359-2.832-2.816C14.787 6.612 14.312 6 12.406 6H4.512c-.511 0-.736.547-.07 1a30.018 30.018 0 00-2.258 2.027C.749 10.482 0 11.412 0 13.282 0 15.042 1.042 17 3.174 17h.01A2.992 2.992 0 006 19a2.992 2.992 0 002.816-2h6.367c.413 1.162 1.512 2 2.816 2s2.403-.838 2.816-2h.685c1.994 0 2.5-1.776 2.5-3.165 0-2.041-1.123-2.584-2.261-2.914zM6 17.2a1.201 1.201 0 010-2.4 1.201 1.201 0 010 2.4zM9.576 11c-1.071 0-3.5-.106-5.219-.75.578-.75.998-1.222 1.27-1.536A2.09 2.09 0 017.188 8h2.388v3zm1-3h1.835c.882 0 1.428.493 2.022 1.105.452.466 1.732 1.895 1.732 1.895h-5.588V8zM18 17.2a1.201 1.201 0 010-2.4 1.201 1.201 0 010 2.4z"/>
        </svg>
      </a>
    </nav>`
  );

  return markup;
};

export default createMarkupFooter;
