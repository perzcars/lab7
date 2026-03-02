import { createClient } from "https://esm.sh/@supabase/supabase-js"

const supabaseUrl = 'https://zicfvwlmcgsmitslfcnp.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InppY2Z2d2xtY2dzbWl0c2xmY25wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI0MTExMjUsImV4cCI6MjA4Nzk4NzEyNX0.tHWSSB7miQBWwEGOZcKwfMAI1Xtcsvwt6RomqUG8D8w'
const supabase = createClient(supabaseUrl, supabaseKey)


async function getBooks () {
  let { data: books, error } = await supabase
  .from('books')
  .select('*')

  for (let book of books) {
  let bookList = document.getElementById('books');
  bookList.innerHTML += `
    <tr>
      <td>${book.id}</td>
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
    </tr>
  `
  }
}

getBooks()