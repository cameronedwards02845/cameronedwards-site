import { useEffect } from 'react';

export default function Coursework() {
    useEffect(() => {
        document.title = 'Cameron Edwards - Coursework';
    }, []);

    return (
      <div>
        <h1>Coursework</h1>
        <p>This page focuses on relevant computer science and philosophy courses I have completed in college so far.</p>
        <h2>
            <a href="https://engineering.case.edu/computer-and-data-sciences" target="_blank" rel="noopener noreferrer">CS</a>
        </h2>
        <p>
            <ul>
                CSDS 132: <i>Programming in Java</i>
            </ul>
            <ul>
                CSDS 233: <i>Introduction to Data Structures</i>
            </ul>
            <ul>
                CSDS 236: <i>Introduction to C++ Programming</i>
            </ul>
            <ul>
                CSDS 281: <i>Logic Design and Computer Organization</i>
            </ul>
            <ul>
                CSDS 302: <i>Discrete Mathematics</i>
            </ul>
            <ul>
                CSDS 310: <i>Algorithms</i>
            </ul>
            <ul>
                CSDS 338: <i>Introduction to Operating Systems and Concurrent Programming</i>
            </ul>
            <ul>
                I have also taken <i>Calculus for Science and Engineering I, II, and III</i> through the <a href="https://mathstats.case.edu/" target="_blank" rel="noopener noreferrer">CWRU Mathematics Department</a>.
            </ul>
        </p>
        <h2>
            <a href="https://philosophy.case.edu/" target="_blank" rel="noopener noreferrer">Philosophy</a>
        </h2>
        <p>
            <ul>
                Philosophy 101: <i>Introduction to Philosophy</i>
            </ul>
            <ul>
                Philosophy 202: <i>Becoming Oneself</i>
            </ul>
            <ul>
                Philosophy 203: <i>Revolutions in Science</i>
            </ul>
            <ul>
                Philosophy 222: <i>The Art and Science of Happiness</i>
            </ul>
            <ul>
                Philosophy 302: <i>Modern Philosophy</i>
            </ul>
        </p>
      </div>
    );
    <footer className="site-footer">
  <p>&copy; {new Date().getFullYear()} Cameron Edwards. All rights reserved.</p>
</footer>

  }