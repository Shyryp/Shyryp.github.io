
import photographic from './images/Photo.jpg' 

function App() {
  return (
    <div className="App">
      <title>Alexander Priyomko - Resume</title>
      <div class="container">
      <div class="listResume">
        <div class="head">
          <ul>
          <li>
            <div class="photoContainer">
              <img class="photo" src={photographic} />
            </div>
          </li>
          <li>
            <div class="name">
              <h1>Alexander Priyomko</h1>
            </div>
          </li>
          </ul>
        </div>
        <p>Greetings! My name is Alexander Priyomko. I am a professional software developer.</p>
        <p>I mainly specialize in full stack development of web applications on the .Net platform together with ReactJS and a bunch of other technologies.</p>
        <h2>My skills:</h2>
        <div class="skills">
          <p>Experience and preferred tools:
            I program in languages:
            <ul>
              <li>C# (main tool, great experience);</li>
              <li>C/C++ (second tool, great experience);</li>
              <li>JavaScript (third tool, little experience);</li>
              <li>PowerShell (middle experience).</li>
            </ul>
          </p>
          <p>
            Use IDE and prefer:
            <ul>
              <li>MS Visual Studio (main IDE, great experience);</li>
              <li>QT Creator (second IDE, great experience);</li>
              <li>Android Studio (third IDE, little experience).</li>
            </ul>
            </p>
          <p>
            Version control system: GIT (great experience), Azure DevOps (TFS), SVN (average experience),
            </p>
          <p>
            Software platforms, API, frameworks:
            <ul>
             <li>.NET/.NET Core;</li>
             <li>ASP.NET;</li>
             <li>WPF;</li>
             <li>WinForms;</li>
             <li>QT;</li>
             <li>WinAPI.</li>
            </ul>
            </p>
          <p>
            Markup languages:
            <ul>
              <li>XML;</li>
              <li>XAML;</li>
              <li>QML;</li>
              <li>HTML;</li>
              <li>CSS.</li>
            </ul>
            </p>
          <p>
            Frontend:
            <ul>
              <li>JavaScript;</li>
              <li>JQuery;</li>
              <li>React;</li>
              <li>HTML5.</li>
            </ul>
            </p>
          <p>
            Database management systems (DBMS):
            <ul>
            <li>Microsoft SQL Server (main DBMS, average experience);</li>
            <li>SQLite (fourth DBMS, little experience).</li>
            </ul>
            </p>
          <p>
            Operating Systems (OS):
            <ul>
            <li>Windows (main OS, great experience);</li>
            <li>Linux (second OS, average experience).</li>
            </ul>
          </p>
        </div>
        <h2>My contacts:</h2>
        <p>Email: sashapriyomko@mail.ru</p>
      </div>
    </div>
    </div>
  );
}

export default App;
