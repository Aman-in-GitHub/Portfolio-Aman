import { useRef, useState } from 'react';

import { useToast } from '@/components/ui/use-toast';

import Confetti from 'react-confetti';

const Contact = () => {
  const [type, setType] = useState('i');

  const width = window.innerWidth;
  const height = window.innerHeight;

  const [showConfetti, setShowConfetti] = useState(false);

  const { toast } = useToast();

  const mailRef = useRef('');
  const companyRef = useRef('');
  const messageRef = useRef('');

  function onFormSubmit(e) {
    e.preventDefault();

    if (
      mailRef.current.trim() == '' ||
      messageRef.current.trim() == '' ||
      (companyRef.current.trim() == '' && type == 'c')
    ) {
      toast({
        variant: 'destructive',
        title: `Please fill all the fields`
      });

      return;
    }

    const myForm = e.target;
    const formData = new FormData(myForm);

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString()
    })
      .then(() => {
        toast({ title: 'Form Submitted Successfully' });

        mailRef.current = '';
        companyRef.current = '';
        messageRef.current = '';

        myForm.reset();

        setShowConfetti(true);

        setTimeout(() => {
          setShowConfetti(false);
        }, 5555);
      })
      .catch((error) =>
        toast({
          variant: 'destructive',
          title: `Error: ${error}`
        })
      );
  }

  return (
    <div
      className="dark:bg-[#101010] dark:text-white pt-16 md:pt-20 px-3 md:px-8 lg:px-28 select-none font-texts min-h-screen relative"
      style={{
        marginBottom: type == 'c' ? '24px' : '',
        overflow: showConfetti ? 'hidden' : ''
      }}
    >
      <h3 className="text-4xl font-cursive font-black md:text-5xl mb-4">
        Contact
      </h3>

      <div className="w-full max-w-6xl mx-auto shadow flex flex-col lg:flex-row rounded-sm dark:shadow-[#232323]">
        <form
          className="p-4 lg:p-6 w-full text-white transition-colors  bg-gradient-to-r from-sky-500 to-sky-400 dark:bg-[#232323]"
          name="Contact"
          method="POST"
          data-netlify="true"
          onSubmit={onFormSubmit}
          autoComplete="off"
        >
          <input type="hidden" name="form-name" value="Contact" />

          <h3 className="text-4xl font-semibold mb-4">Get In Touch</h3>
          <div className="mb-4">
            <p className="text-xl mb-2">Hi! My email is...</p>
            <input
              type="email"
              name="email"
              placeholder="Your mail"
              className="bg-sky-300 transition-colors placeholder-white px-2 lg:px-3 py-2 rounded-sm w-full focus:outline-0 text-black"
              defaultValue={mailRef.current}
              onChange={(e) => (mailRef.current = e.target.value)}
            />
          </div>
          <div className="mb-4">
            <p className="text-xl mb-2">and I represent...</p>
            <div className="border-[1px] rounded-sm border-white overflow-hidden font-medium w-fit">
              <button
                type="button"
                className="text-sm px-3 py-1.5 transition-colors duration-500 relative"
                onClick={() => setType('i')}
                style={{
                  color: type == 'c' ? 'white' : '#0ea5e9',
                  background: type == 'c' ? '#0ea5e9' : 'white'
                }}
              >
                <span className="relative z-10">An individual</span>
                <div className="absolute inset-0 z-0"></div>
              </button>
              <button
                type="button"
                className="text-sm px-3 py-1.5 transition-colors duration-500 relative"
                onClick={() => setType('c')}
                style={{
                  color: type == 'i' ? 'white' : '#0ea5e9',
                  background: type == 'i' ? '#0ea5e9' : 'white'
                }}
              >
                <span className="relative z-10">A company</span>
              </button>
            </div>
          </div>
          {type == 'c' && (
            <div className="mb-4">
              <p className="text-xl mb-2">by the name of...</p>
              <input
                type="text"
                name="company"
                placeholder="Your company name"
                className="bg-sky-300 transition-colors placeholder-white px-2 lg:px-3 py-2 rounded-sm w-full focus:outline-0 text-black"
                defaultValue={companyRef.current}
                onChange={(e) => (companyRef.current = e.target.value)}
              />
            </div>
          )}

          <div className="mb-4">
            <p className="text-xl mb-2">I'd love to ask about...</p>
            <textarea
              name="message"
              placeholder="Whatever your heart desires"
              className="bg-sky-300 transition-colors min-h-[150px] resize-none placeholder-white px-2 lg:px-3 py-2 rounded-sm w-full focus:outline-0 text-black"
              defaultValue={messageRef.current}
              onChange={(e) => (messageRef.current = e.target.value)}
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-white text-sky-500 text-lg text-center rounded-sm w-full py-2 font-semibold active:scale-[0.99] transition-all hover:bg-[#f0f0f0]"
          >
            Submit
          </button>
        </form>
        <div className="relative overflow-hidden w-full min-h-[100px] hidden lg:block">
          <div className="absolute inset-0 bg-[#f7f7f7] dark:bg-[#232323] flex items-center justify-center">
            <img src="/mail.svg" alt="Mail Svg" className="w-[500px]" />
          </div>
        </div>
      </div>

      {showConfetti && (
        <Confetti
          width={width}
          height={height}
          numberOfPieces={400}
          gravity={0.2}
        />
      )}
    </div>
  );
};

export default Contact;
