import React from 'react'

export default function DealOfTheDay() {
  return (
    <section className='deal-of-the-day py-4 px-5'>
        <div className="container-fluid">
            <div className="row">
                <div className="d-flex w-100 align-items-center">
                    <h2 className='fw-normal py-2'>Deals of the Day</h2>
                    <p className='text-secondary d-flex align-items-center m-0'>
                        <i class="material-symbols-outlined me-2 ms-2">timer</i>
                        16 : 40 : 19 Left
                    </p>
                    <button className='btn btn-danger w-auto ms-auto'>View More</button>
                </div>
                <ul className='pt-3'>
                     <li>
                        <a className='card shadow-sm bg-transparent' href="#">
                            <img src={'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoGCBETExcSExUYFxcZGRkXGBcXGhcYGhoZFxgZGhcXGRkaHy0jGhwoHRcaJDUkKCwxMjIyGSQ3PDcwOysxMi4BCwsLDw4PHRERHTEoIykyMTEuMTExMTExMTExMTEzMTEzMTExMTExMTExLjExMTIxMTExMTE5MTExMTExMTExMf/AABEIALoBDwMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIEBQYHAwj/xABCEAACAQIEAwYEAwUFBwUAAAABAhEAAwQSITEFQVEGBxMiYXEygZGhQrHwFCNSwdEWM3KS8RUXNENi0+FTgoOTsv/EABoBAQEBAQEBAQAAAAAAAAAAAAABAgMEBQb/xAAsEQACAgEDAwIFBAMAAAAAAAAAAQIRAwQSITFBUWFxBRMUIjKBkaHxI0LB/9oADAMBAAIRAxEAPwDLJoTRUKoDmimhRUIHRUKFCgoFjRUKEATQihQoAoooo6KhRFwVziulyudAHQAoqMVAHFAUKBFBQc0Zc9TSaFUAoqOhQBRQo6KgBQoUKAFFR0RoBNChQqAFChQoAUVHQoB7QpVJqkBRUdFQAoUKKhQUKFChAGio6KgBRUKFCiLtcq6Xa5TUAYpQokBNPHwLi14umXME9ZIJ/IVLSOscUpK0uCV7KYK1efwnWWYEIcxHmI8o2POBHrVg4Dwds7IbQvKAyNuEQ6w7ORAEAnWqTwy8Vaf9asv+0sUUyW2YKxBZVnzR8Ob+KOlcJflyfd0ji8P2r0KxxDDG1de0SCVYiVIZSORDDcRzpvNWuxwe7jjcdRmuL5mOYBzJicp+LXkNRVe4hgLlo+YaA5TpBBHIjltXWM0z5Wo0c8bclyvTt7jahSQ1HNdDxB0KE0KAFFR0KAKiNKpJoBNChQqAFChQoAUKFCgH9JpUUIqkEmipRojQBUKFCgCoUKFACioUKAI0kmlE0k0Kc7prrw7A3r9wWrKM7mYVeg3PoPWrr2FwPCjhzcx1pnZrhRT4joBtARUPmPvWgdgMdwy0zjBogT4fL/eETozM2p+Z0rDkkaUJVdGd9mO7fH3bii/bNi2dS7ZWMTBAUNIMSdal8R2R4nhrWJ/Z0t30dRaOXzXShM+IiciI6yJ06jZcTjrYt+IY2JHPXXTSj4Tibd22HVQNSsQBqv6mpacuDpHLOMXFdDy/Z4TilcI1i6rEwFa3cBmJiImavvZXszjyjMMJckwAXuGwykQwKgkEmQDqI0rbgQNzsfvSgoBmjgm7O2LWzxx2xSMp4N3YXswuXroTZsqQxkeugB9afdqO7Jblm6bNxjeZS3n8yuwM77qTtMn2rSAPWjFVQiuxJ67PNNXw/RHlPhPZXH374wyWLi3NZFxWthQNyxYaCmPFeH38PdaxfRrbqYZW39CORB5EaGvXlUHvX7CpxC0cRZGXFW1hSTC3EUk+G3IHUweuh022eM89A0YrmhpYNCh0KFCgBSTR0RoBNChQoAUKFCgBRUdCoCQoUFoGqQI0k0qk0AVChNExqN0ajFydIWtliJAJpBFP8FcA8oMiASYjWNR8jTzFcRi0bGRGUsH1UZwRtleJGnLbU1yWR3VH0voIPHuUiDoqf+IJAddPQV2tAZw1tc2WGjQjQzBnQ+1X5hhaC/8Ab+CIJoialbS29cy6nfl/pXO9h7f4SVHrtTfZt/D3FbrTHfC8Riw1u5b/AOVHhqMsKR+LKTvOs0+7Ldob/Czce2gZrkKysYIKSRmESQc0/KoTDXWTUHbakYm61xszEk/qBWVuvnodZ4cfy0ldmg8Q7eteVWXyNocgByjTURFO+DdscRYstdNqFY5lZnGSSSui6EsSraSPgPSqDwm0fiI0kD1J3gfL86tXa+xbOHDKptPZuQ9p9WZ8QquHD6hwVt7aEdI0qLqza00FBX3Ltw3t3axCeDiF8G4R5bmotMdwMx1QkDY6epp9wjt5girtcvBAhACtOaIgTA+9YJiNAZOvSumDdCIY6kz7RtVcq5OD0uNz2rg2rHdtMLePiYXEFbkR4bo65o6MRlJI5E047M95GDvgLduJbbQS0rJ6wR+RrLPHsqn7rIS6jMSXzIQwYhfwiSo1106VxscNS7nutcS2ARq2YtpG2UHNMj196zGXPB1yaCMYX/ZvOD7WcOutlTFWS3IFwpPtmiflUxbuKwlSGHoQR9q882+E21um9eW0LKkDKHg3CqgOq2zBzSD5TkMmm6BsOwvYZrtpQ0B5ZcxWCUNxRlOnKOfOuu+up5Vot34sed+XBLeGx4uWgqrfTxCiwMrglXMDYGAfctVDTXarXxJr98vdvu9xwNnbPAzaLv5RBJ/lrNdWwuHQLicPeQsvmazdAS4MhhtJIadDAOzaSQYnzLujS+H7a3Sq/QqZsONSpj2NLw+Du3GCIjMx2VRmJ9gNTUvbxgzawRrI5EdNKs3ZrDI7NewoUXkErbuAFWBHmAk/FuAJGhrKy800eh/DYNNxldFVbsrjhaF3wWIzFMo/vAyglpt/FAA10qFuAgkEEEGCDoQRuCK0/s9xLiFy+62woeWuFT/CSAwRSZZRA0Eny+9M+J9n7GJt4khSuMts1w5AQjrm86hIEFRJ61tTTdHHN8PajcXz3Vmc0KDrBI6GKKtnzGq4DoUKFAChQoUA/FCgKFUgRpJpRpLUBYuzPYvF46zcv2fDVU+HxGKm4w1KpodhzOk6ezP+yPEidMLdO+oXTTeDWjdjnCYayheR4YPl9pA/kfarZ+2WcikDZYYzrmjURO3rXF5OqOsU48owo9neIpvh7okcx6/+KY2wwYhgQw3BBB9o5Vu94WHUEFw3ONZ1312pph+FYI2mN3DWbhLmWdFNws0nNnIkj0mNq570+p6ceZx5Zi2KxbFBbhQs5pyrmJiPjiY9JjnT7s1jEttmZQ3MSQNQDB1BG8HUEGIO9WntJ2Ca63i4R7YB3tt+7gydVOoP2ocG7rcY6Z7l+zbHISzn1kAAfet1uVWd4alKe5kR2wt4YBb2HcEOzAiRmJ+IuyQMp8wHlGXTTUGqxcboTWnv3TEj/jVcjkEyDlG7H600u902K/BdthY+JyYj/wBoJpQlqVLv+5n9qD7z00+tWDgmEsuHFxHaELBk/DodSDuslZ9vWrVwDuluM48fEqFAkiyrEnoA7gAe+U9PWrZZ7ssGqPaW/iPNGY5rWbTUa+HoKu19jePWY48SMv4lxNWW1hbSLcZGPhXCSpTxl/uYcbI7fExPwggrrSL2KPg5bphv3tsBwbjZ0KH92FPxlvKCwAUZoJ0Fafa7qeHBfM99j/EXQH2gJFPB3Y8KKgPbd42LXHB1/wAEA1qr6nF6qKX2tnnnFX8xmAPQT7cz6UqwsiR+vSt84l3UcLuyR4yNEZhcLbCB/eBpgCIqF/3LYfJ/xd0NrrkTL6eWZ+9HE4LUc7mZbw5zIzTHIfnVwx/D1GEw9y0pZ3a5nKzmzE/u1RecKrNI/oK7/wC6niNsnK9h1GqtndGj1BTT2k+9Wfs32LxwNpMQ9oWbbm5kUs75iIZQwVcqkbiTXLY9x9THroLGvu5Xbzw+DHsVjAbhkgwxMgAM0mSWY6sfeul/i997S4fxWNoGVtScoJJMwNzJP1r1Eli3lyBFC7ZcojTlG1VbtT3f4LFKxRFsXTr4ltQASOboIDfY+tdNh4PrNzpqldmM9kbiq+Z1Lpuy7yFEmfrvy3qV4z2dQm4QYhfEtsYXPbKFw2pAJ2UgfiJHKpP/AHbcRsOAuS4k6FHgx6q8R8prQeyHZhbdlv2lA7uCrBgGAWfhHvGbT05iucYPcfSlrMUcPVPtXX+qMO4TwbxLqW7rrYFwMVdwcvlkQQNRLCKs+G4PcwLjxLlpkZcyujZlIJHUA6GBtrIia0nGd3nDrj+IEa2eiOQPvMfKKk+F9m8HYlUtgzuX80+877/etvGn1PLD4hGD3Rv2r/pkmKXENcIsJdLoGZnVW+F82VyVGoIZuoMmmowmKV38l5SxeWZLsKG0zHSdZEt+c1vq21GwA0jQRoNh7UuK18tGX8UldqP8nknj2BaxcKmDOoKkEev3qOBr15iMBYcqXtIxUllLIpysQQWEjQkEia8999fA7WDx8WUCpdtrdCqAFVizIwUDYeSY/wCqtpcHzck1KTklVlIo6IUdDAVHQoUA/oUKArRAUk0qhUB1wfFr+H/u20PI6gHqByNTNjtiwt5HUlty6sBJ/pVaxY0FNorMopm4toumD7e3UYEpmXZhOsdV6Gn9vtyl26FebdqZiCZM/ijYVnlGDWXjiXczWU7W4MGFuAf4tFqVTi/iCVuW1U8gwMn5nbasSzUkRzrLxou9m82O0iWjlIYk5fMIYSOgFTeC4+lzLluA8yszHuOXtXm5RB0MeokU4w+OvowZLlwNoZDN0+9XZ4G5HpXC8RVCzswAnKJj8R0+4p+3EFtrnManc8wNz7615ovccxp3xFwg678/613/ANr42+VR8U5jVQx8vr6TA5/WooyXcUmejbXFrJAuZ5jeNRruflNAcfsZguac5hY215TtzrzZb4zilLJ4zDUgiFgkHmI9K73+P4rKB4pgMBlXLuQdYg9OVWpeRSPStjFllOSDB3B03On0mnq3gTFefuzvb3F4WzctoUuZsrTcBIWZJIykGCOtd7XeHxJCxi2mYhSWQkqTDEKpbQxzPUaVUmjLRvVzQGAPaiSyBqBBO9YU3eJxafK9rn/yyICiREvqSDy6jXeA/ebxUFkuNbttGUfuiRmgHfMddvrV292gkbPxW3dHntmY5a124XizcXzAhhodNKwq73jcUcQbyIdiRbUERz13BmBofipXZrvA4naF27mW8G8zLcVFC/D51ysDtIIg7isqDUrQfQ363MCd+dLrEbverxMDS1YmQCGt3RlJXOoJFzUlZ0A5b6xRdoe8jF30Ftbf7PGVma3cZmecokEBSi+ddCOe9bVko2BOK4c3DZFxC6zKhhII3B9adPdUMFJ1MkDrET+YrzNeKg/tGYq+fMXUkOQx/vDGsEncxMH2rvieJX2K3fFuC4plXe48hCDmAckkbbA8uelSma2o9IYsNlOU/eKZWOL2QmZ7lsAaFs6EZpiNDvNefOJ8exGIGW7cu3EZYyl7lwFZ6fi1B15EHWmniGTbfXKBl0EltFOu55QI58tKbHd2K7HoXtH2mw+Et5mIdiJVFZZIG5JJhV9TXnXvA7RXOIYtr7rkAUIiTmyqsmCeZJLGfWlYZvhYrozEKOZA3E7g7e1RHFli58hznrz51ojjSGgo6KjoZBQoUVUEhQpE0dUgqaFFNHQHHF7D3ptTy8JFNIrLNIKhRxQAoAKaKKM0IoAwKNhrr96KgN6ACE8qUvT9aUUUYcwNRp+ooUBJ941/Ki13/W9Kj0oZfcdfWgOxxOZjmJM/iMyREa666TXY4iT5QSNJ5QTpAmTz5dOUmmtkcp925QfuP/FOLJ39xImCDlJLKdgd9etAJuOfMBoQCCCTqxkEHbUSY9zS7gOfzLDBpb2ME6GdZP3FLfSZ8xYhpO8jysQR6TM+9dMMxDgk6CREgkgjzTPL16dKpUghfYurA6KhVSPNljWCQZAG8nahau3FQrJGYappOUSIKkSd5lYn5VzYZVhAGg68zBETqAd9j7b11wlkeUAB20KyBBk6LM6fM/nNBQ3u3WDI0Ex1BAOUEQR10PrUi7FiG1Y5sy66kmFI0jLGWYI6bzXOypzvayOpMRkK6kAAtO0a8uvKl3E8wbJoJKtJKyVneM25Gn+lCoRiM058y5isEsD+EiRA22OhkaUvxEe6zMMhcKY31IkkdJ102j3roqkSAGfP8K6BfMGlJ28pU8644a2QSXIFudiNVBkKB8pGnUxQtDi9bCDMIOi5tgQJXMSYG2morlcsuATnQliCN4VQvlGp3/pqa6thLzKTJBO5BidRoD03jcwdtwFYHD27o8xAKyDuSCDGg3gRvA50NbTipaDMFQTl6mN16k769KieLCLnXQevWp8tGcFpUEkDppr8yQNTyHpVbx93O5I9vpUMz4RxoUVHVOQVChQqAkRZbpSlw7Gpw4cxRJYHOllohv2ZqFzDkKW6CanGsDkKO3hQSA2xIB9jvU3CiolprnrWtYfsngvCjwwfUk5vry+VQ/FextgZnVnEgkIuUAQNBMTy+9c1kR1fJn2agGrrl/RpDkVuw8dK7CDdKGaulpZ0pN0VbI8fF2JkUeajRBtE1P4fstfu2GxFpZVTHxICTlLHRmBiA2onVSOsTdyaWCTi5ccEAhpRWuLIRuKCKTWrOe13R2DzrSgRz+lTXBeBpdg3HIExCDO+xg5QZiQJgfeBTvifZMCy2Ks3ItDKMtwZHDENmClozqpVhm0MgiDE1lST5PRLSZI1aK9bIJ1+sxtqRHrt9KWqyAwIJ2M6dNdeWuvtNMfDMxXZcMd6u5I5xxTl0Q+tqoBJEGARqYmRyjUwdpG1KtZQNZjNB11AInSTtuPeo1y45n60m2rMYmlk2u6olrLzozCNdRBjMNiNPLMA866h/DyHRgSWJ0ykhSoJB1BAYx/OlWuA57Av2ySqkLckgZS20c4PsaaHgV4FS4KI0+eCy6QSPLzAIMeoqKaOz02RdFfsS14WGyG27AgnOqrJg6eVhsddRTfEG0M6+JaZVylXBIbSCUXQGQQByB+Wjjg/ZW5c2XNK5g2ZYABXM0bsAp1AEiZ5QZ7sx2Twl9btzEXRat21JJWCx0+IaGFGnLWYFTem6R3+gmoOcmlXbq+enQrlviNmQWcE6ywVlHoYjXQDT0orvE8PcEOWIzSFIY7RBEGNhEkzR2uDAKrAhszMFgiCVfLG+m4OvJgdiDUx237GjBurLcRlZS0ErmBUIWUxoT5iR1Cnnu3t2kZelaScmue3sRWe+U8W0jG2rBcx5MwJVRrpoG0ptgLeIuHxFkBWVXOYAy5OXTfUgiY058qt3CeE4p8Jks2/Gt3CGU+DcDqy5cxDxlGqxALBh9AfC+yt1yVOFxCyjLmcMV8dVJD6KsWzoBM6nc1Lmz0rBhXWXuVnFYN1bzDTbTUe089K5cd7PuLZxVlM1nQsUObw85MI/MERuRzB51cuCS1s4QpDsbguI6kuGS2z2nAOqbFSNtQYmaXwHiR8C5YDAA2iVJGZCCWz2rgGyvmIk84rnBtS5PXqNNCeJxgla6e3kyahXWORG2n0oigrvZ+bo50KX4dEUNWyUX44fTT70vC4UT5qjVvPuXromMcVDVEwMKnSuTYUAzuAQfvTA8YPwggH71xuYl23Y1GKLJxrtLZsQNdv0B61YrFtLqgghgQIIOhnY1jfaNpZPY/mKbYHiuJsx4V11A2UMcuv/SdPtWflpou5mvf2Fwl25ndGGpZoPxSNiTsNNhFSVvslgXGTwQg9FH301NUPsx3mXbMJik8Vf40hXHuvwt9qvHCe8Lhd5lU3DaY6DxVKr83+Ffcmmxhzb6lf7S92KQzYV/MBORjII6RGn1qq9neydw4hFxSFbYmdR5iB5Rpyk7+kVuFvHYZ3CJftFoBgXEJI6wDMa09PDrRVmZQ0jTn86NSrgKS7mR8R7u7hutcstbS2VkKwJOf+EDksRrNTfA+7vEsi2r19FtMczIgZyGyicpbRSRpPTSKvWDwCMSCWUfhg6esg6V3wrFTMkwWjltsdKnujpHPKKqLILtB2CwFzCvZS2ouhfLeYZrhYajM51IO0bAbRWG47hF3DlReTLmzBZIg5TBjpy3r0yHVgCyz1/XKmPFuzOAxVuLtoMo1HmcFSOYIOhq8suPNtdy5PPaYnw1J0DR0p/wAM4RxLHqotWLlxF+Fj5UG8gO5APyPIVuHB+yfDLeVrWFtyugLjOR6y5OvrvU5aKooEAAaADYCeVEkdp61v8V+5h2B7CcQtLcJwo8RVaCblorDACVQyGIAYa/x7AgGoKxwx0ZfEtPl1EEMk6RvEjUjlrBFekn6ESD+orgbCDKGgxqPQzM/rpSUG31N4dfsvdFO/HBR+y3d/ZS2pvG4rHNmQN5SxkK87ggaaZZGjAgkEr/dFw5mzi5iFOkAOhAA/CJSYjTfStDgGkWyBpPXn9q36HinklKW5mRYzsP8AsV7IzG5hb5Zc0LnR2RghYcypOYFYnLrGgMTh7+Kwk4e8GVLm4mA6RlPlPUQIOsH1rUu1vG+FpbKYu9bylsuVWLPmBgwtuXkEidNJrLu0HGOC3L6u13F4hWaGLAoltJMR5QxAPIDY9a5Sg2+D6Wm10Ixqf68cPx+pL4DGouR8PbCuplrQJCtKgMcpMZ5UHyxqV0JUGprCdj3xVsm4n7PnOZiPjeRr+70W3r/oKR2b4l2ewzlreIt5wAQ1x3aMw1yltAeRjWrvwbjWFxQLYe6l1RoShBg9COVbjHimYz65X/hVer6ldwPdvw5BDi5c6F3ZY9vDy/o1M8I7MYHDAeFYQETDsMziTOjvLASdpqUxOIVACef6NNsdxjC2VD3b9u2rHKpd1UE9BJ1NaSVnhnmyT/JsfgUDpqapXG+8rhtm21y2/jsCFC29AWacoLtAjQmRMDWKyntN2oxvEC73HKoNFsJLW1Ua+YEeZjHxMDMaQDFao5G+NisMLplravAEkoGI0IAJ1I1rFnwr4vH32w1si01xyGjLbgNlLgjQgkEiOtUl3VizTmEZdYJgQNJ1A1GnpWn91WCH7MLo8RSzGZjI+UkCOZAH3mix7+GejFqZaduUfFDPiPdhYYlrV50J1hwGEn2g1XeId3eOtSUCXR/0NB/ytH51scUK6vFE8fzJHnfG4K7ZbLdttbbo6lfpO9NWr0ZjLFq6pS7bW4p3VwGH3qj9ou7i3c8+CYI062rh8nqUbcexn5ViWNroaU/JSsNYOUO3PUe1Fic0eUwfaasfZNbOIsi2SA6+X+n1o+NdnbtoFgpI38oJ+w1Pyrntb5Rtyp8lRulnWGSfoCPvTGw95WylivTNqD6VMOSPiBX/ABCK53lBGsEetAQuOvM8FgJEim1PeI2lA0/OmNUocUCtAGlUIIy05w+Pv2oFu7cSDIyOyweREHeuIijiqC18L7yeK2FC+KtwAaeKiufm2jH5k1PYHvhxAH77C2nM6lGe3p7HNr61mpE0GQT6UJRrt/vktZBkwjliTIa6qqByhgpJPyFMbvfNiRpawttR0d3frOoC84rMclDINBPz9D6VBRauLd4nFL9zxRfNkAABLH7tdJ1IJJO/Mnl0qNHaPibvP7ZiMx2HjXBvJ2mKiogkHbalW2jXSCCJ+UT7iqWiUtdqOJyYxmJk6Q165yknc6GRQxvaPiVyS+MvtqBIu3Au5gwCBGhMxyqPtoqnNp1G0TG0n1rolslQBEc/QgwPXUsB/wCKCiTTtZxMKB+2YgaBQfFfbWec5vXfX2qOClszMSW1MtLA6AtmO4JmZiNK5sxKgEqIEAaZtCCPNyOv035V3BU+VgC0SN5IAJ00EMPpvzoKHGDYoFZAAhYZkZlEsPhnNED1/qaQwDNlJYgyW0yyxiWgiQTIPT5RCbd8G34cgpOaJ1kAjWTqPO+vr66d/FKwJOYCQSJEEg9IyzB06fSig8RaYZR5AuzMCwIzPpnJkHdRI0B061zwl29ZK3bVw2m2DW2yMB8RzDMJ3Ya+U5aWuIIAkKqQVBEZSPMzaQTPmjX+GiuPGgynLoQVXXSCCBo4kEjTn0oKEY/FYy66tdv3XeIDvdY6dFYmANudccVMFnZnPwlyS5IBEKC231px1BJVQBly6HcyI2bc6GN65ZxLBvwgzAMTMkidttxQUJuyMyJBU5dzMDSI5GBzBmAPWiC+GvlbNE6SYYawQPqNKJcrQxJMgZSxnbWT60pyGgyQVJOmxJgkRpCnT60NUJtqVzabzKrPSY9gda13usCrg1GYZmd3iROXNAMTtp6b1j11h8gNIPMHbT5Vaex1q4LbXBjbeHa5CkKou3ci/CoUH92N/U71qDpmMi4NV4pxJbRVQM7sRKggZUJ81xidFUCTJ32GtRPE+0yny4coeRv3WyWV9QSQbp9E06kVWL3A7FwRdu4u6u7KcllCf4mDwWPqSTSsFgMOGIw+Du3G2zG5eaTyByAg+1dG2ckkW0cbsmAC7nqlq6VPzCx96k+HMXYZQdp2IO3McqgOF9jsa4FxbeFwhbXMbRuXVHqDHm+dWHEcWw3DbYsG42IvfiJ8MMdZOcooVQNgInb3rLyJF2NmCYbEvaYPbJVhz/kRzFXns32+UAW8QI5SRKH+a1n2tc3FcE2uh3as3MrgMWkzln8S5HX7g1XeJd11q6xeziJnZYSP8oCmswwuIu2jmtOyHqpIn3Gx+dWDh3bnG2vjK3AP4hlb/Mv9K3u8mNvgd8a7usbbMgIygbBTbn6z+dVnHdnMXbJzWiB6Sf5VovDO9IQBcW4kaaEMP61P4Tt1gr2jNaY9LiAH60uJKkYRdsunxKR7iuYavQ7Nwy+PNZtNP8LfyOlM8R2L4Ld3tOhPNWH8qUvJbfgwYGjDVsuI7q+GPrbxN1PQhW/Oo6/3Pr/y8ekcg9oj7h6lCzLZomPpWj3O5/Gf8vFYVv8AE1xfyQ1yPdBxP/1cKfa7c/nboWygZ9/WiLfOrvie6jiynRLVz1S6oj/PFcx3VcYifCSZjL4qSfXeI+dBZTyQdBtQW4fTTpt7wOdXTDd0/GGJm3bT1a4v2yzTkd0XFuuH/wDsb+SUFoorucpWNPYaRt86UgMSIBjQ8j00jer6O6Div8eG+dy5/wBujHc5xTlcwo/+S7/2qCyi583xSTMyeqj9D1pSZgNy0+Yc9ToSD+E6nT1HSr9a7n+JiP32FB9Gukc+RtQd6cDubxkz+0WV01A8Ruu0gRQtmbIIGcATvOxEnWSDtB39aVddMs5ZJmSIOsDfX2n1HrWnf7m8QWDHGW1I3y2TrHMjMAa7p3LGZbHBeoSxH53YH0oLMra9oBlWPkTG59efrSrbbhvLpqSZBkEakA8ug5+ta5a7l8PMvi7p2nKiLJA31mn2G7n+Grq13Ev7vbA+yT96WLMRvXUz6zl0iJBk76/rfSKJnMnOQJGWTMZdRMDeNfat8s92HBF1a0Wj+K9c5f4WFSVjspwW1thMOf8AGguf/uaCzzZbubZYJ0WBJ6x71IWOEYh2yi1cDROVLbsTI8o0mN+elelsPfwlkRaREA5W0VR9gKF7jSDUKTQWYd2c7ueI3xrZ8Edb+YSP8IGlXns73YGzcLXbiEGJCKNPRQUAHuZq0f2kZ5CJEGPNpPtrUbi+JYu4YFwIOYA1+smpuoVZIYfstgrUtcYvrMOyqumwyqBI9DNdMV2iwuHGS0gPIKgVFn9dAarv7A7k+I7PpsZPsZJpzg+Doh8QIATvoVJjaetN1jbQ04nxzG4jyrcS2J1RNDHQnNmb5aHpUM/C7gMIQxOsMoUe4IP8qtZwpUzA1OwBUjSjaV0ymTqNiT8xvFQvsYQbdcWt08POkPuKllaGJHoaQVmnb1xub1bMnHJRFBSxvQoKDw110+FivsSPyqVw/GsSnw3WjodaiztSVoC04Xtfil/HPuCPuNKlMN23xHNQfb9GqRbpSUBoVnt634kH1FPrPbteaH7f1rMrLknUk/On6qI2qizSbXbe30b6U4Ttpb6n6GstG9OAdBVohqK9sE/iP0NL/tevU/Q1mVtz1P1rrnPU/WlA0xO1oOxNLHalup+9ZzhnPU/Wn9pjO9WgXhe0znr966f2gu+tUuyx609mlCy1Lxu8ef3of7WvH8UfMf1qBwesTrU/grKfwj6CrRmxH+0bh3f86623uNzY+wP5mmfahyi+Qlf8On5VHYW6zt5mLeX8RJ5+tKSCdk7d0+JgPdtfosmkrdtaaluWggfVtftTF+Xt/WoXjlxlK5SRI1gkT7xvVBazik1Gw2/TT/Sm5uE6LOnKobhtxmAzEny8yT0qTt6nXWNvTQbdKyaHFpDObMP5/bnNOFtrEnX5H+QpxhvhX2P50q4PzFYNHC3lAjaddRl+WgrqLzLpy5CPvJ/WtKs7/P8AlR3P7yOUbVAcWxJ2CzHOR/WdvSlWrgO+nqVI+hNdMagjYc+VQeAvP+0XkzHKAsLJgew5VbFcH//Z'} alt='' height={'240px'} />
                        </a>
                        <p className='text-capitalize text-center m-0 pt-2 font-small'>Red velvet cheese cake</p>
                        <p className='text-capitalize text-center m-0 fw-bold'>OMR 25.00</p>
                        <p className='text-capitalize text-center m-0 fw-light font-small pt-2'>Earliest Delivery:<span className='text-success fw-bold'>Today</span></p>
                    </li>
                </ul>
            </div>
        </div>
    </section>
  )
}