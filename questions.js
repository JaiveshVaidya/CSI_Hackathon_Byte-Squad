const express = require('express');
const cors = require('cors');
const { Configuration, OpenAIApi } = require('openai');

// Create Express app
const app = express();
app.use(cors()); // Enable CORS for cross-origin requests
app.use(express.json()); // Parse JSON body

// Set up OpenAI configuration with your API key
const configuration = new Configuration({
  apiKey: 'sk-ay9d9-OuTPg6we8HRYqqCjjbrX_--YzGLh-BiXsBP_T3BlbkFJIL9XFkIFSK6ZwRdjevWzWAyFD6x2S_XsVXB_xGFEgA',
});
const openai = new OpenAIApi(configuration);

// Endpoint to generate questions
app.post('/generate-question', async (req, res) => {
  const { domain } = req.body;

  const prompt = Generate 1 random question with 4 options related to ${domain}. Format: Question: [your question here] Options: [option A, option B, option C, option D] Answer: [correct option];

  try {
    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 150,
      temperature: 0.7,
    });

    const generatedText = response.data.choices[0].message.content;
    res.json({ question: generatedText });
  } catch (error) {
    console.error('Error generating question:', error);
    res.status(500).json({ error: 'Error generating question' });
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(Server is running on http://localhost:${PORT});
});

async function showField(field) {
  const fieldDetails = document.getElementById("field-details");
  fieldDetails.innerHTML = "Generating questions...";

  try {
      // Make a request to the backend to generate the question
      const response = await fetch('http://localhost:3000/generate-question', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ domain: field }), // Pass the selected field to backend
      });

      const data = await response.json();
      
      if (data.question) {
          // Display the generated question and options
          fieldDetails.innerHTML = `<h2>${field} Quiz</h2><p>${data.question}</p>`;
      } else {
          fieldDetails.innerHTML = "Error generating question.";
      }
  } catch (error) {
      console.error('Error fetching question:', error);
      fieldDetails.innerHTML = "Error fetching question.";
  }
}


// Function to display generated question
async function showField(field) {
  const fieldDetails = document.getElementById("field-details");
  fieldDetails.innerHTML = "Generating questions...";

  // Fetch a question using OpenAI API based on the field
  const question = await generateQuestion(field);
  
  // Display the generated question
  fieldDetails.innerHTML = `<h2>${field} Quiz</h2><p>${question}</p>`;
}